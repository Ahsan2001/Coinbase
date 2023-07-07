const { userRegisterSchema, userLoginSchema } = require("./schema");
const User = require("../../models/user");
const bcrypt = require('bcryptjs');
const UserDto = require("../../dto/user");


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

        // Store User in Database
        const userToRegister = new User({
            username,
            name,
            email,
            password: hashPassword
        })

        const user = await userToRegister.save()

        const UserDTO = new UserDto(user) 

        return res.status(201).json({ user: UserDTO })

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

        const UserDTO = new UserDto(user) 
        return res.status(200).json({ user: UserDTO})
    }
}


module.exports = authController