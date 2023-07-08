const { userRegisterSchema, userLoginSchema } = require("./schema");
const User = require("../../models/user");
const bcrypt = require('bcryptjs');
const UserDto = require("../../dto/user");
const JWTService = require("../../services/JWT");


const authController = {
    async register(req, res, next) {

        // validation user input with joi schema 
        const { error } = userRegisterSchema.validate(req.body)
        if (error) {
            return next(error)
        }

        // destructure input fields
        const { email, username, name, password } = req.body;

        // validate email and username exists
        try {
            const emailInUse = await User.exists({ email });
            const usernameInUse = await User.exists({ username });

            if (emailInUse) {
                const error = {
                    status: 409,
                    message: "Email already registered, Use another Email!"
                }
                return next(error)
            }

            if (usernameInUse) {
                const error = {
                    status: 409,
                    message: "Username not available, Choose another Username!"
                }
                return next(error)
            }

        } catch (error) {
            return next(error)
        }

        // Secure Password
        const hashPassword = await bcrypt.hash(password, 10)


        let accessToken
        let refreshToken
        let user
        try {
            // Store User in Database
            const userToRegister = new User({
                username,
                name,
                email,
                password: hashPassword
            })
            user = await userToRegister.save()

            // token generation
            accessToken = JWTService.signAccessToken({ _id: user._id }, "30m");

            refreshToken = JWTService.signRefreshToken({ _id: user._id }, "60m");
        } catch (error) {
            return next(error);
        }

        // store refresh token in db
        await JWTService.storeRefreshToken(refreshToken, user._id);

        // send tokens in cookie
        res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
        });

        res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
        });


        const userDTO = new UserDto(user)
        return res.status(201).json({ user: userDTO })

    },
    async login(req, res, next) {

        // validation user input with joi schema 
        const { error } = userLoginSchema.validate(req.body);

        if (error) {
            return next(error)
        }

        // destructure input field
        const { username, password } = req.body;

        let user;
        try {
            user = await User.findOne({ username: username })

            if (!user) {
                const error = {
                    status: 401,
                    message: "Invalid Username"
                }
                return next(error)
            }

            const match = await bcrypt.compare(password, user.password)

            if (!match) {
                const error = {
                    status: 401,
                    message: "Invalid Password"
                }
                return next(error)
            }

        } catch (error) {
            return next(error)
        }

        const accessToken = JWTService.signAccessToken({ _id: user._id }, "30m");
        const refreshToken = JWTService.signRefreshToken({ _id: user._id }, "60m");

        // store refresh token in db
        await JWTService.storeRefreshToken(refreshToken, user._id);

        // send tokens in cookie
        res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
        });

        res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
        });

        const userDTO = new UserDto(user)
        return res.status(200).json({ user: userDTO })
    }
}


module.exports = authController