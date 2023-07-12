const {createBlogSchema, getByIdSchema, updateBlogSchema} = require("../schema/blog");
const fs = require("fs");
const Blog = require("../models/blog");
const { BACKEND_SERVER_PATH } = require("../config");
const BlogDTO = require("../dto/blog");
const BlogDetailsDTO = require("../dto/blog-detail");




const blogController = {

    async create(req,res,next){
        const {error} = createBlogSchema.validate(req.body)

        if(error){
            return next(error);
        }

        const {title, author, content, photo} = req.body;


        const buffer = Buffer.from(photo.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), "base64")

        const imagePath = `${Date.now()}-${author}.png`;

        try {
            fs.writeFileSync(`storage/${imagePath}`, buffer)
        } catch (error) {
            return next(error);
        }

        let newBlog;
        try {
            newBlog = new Blog({
                title,
                author,
                content,
                photoPath : `${BACKEND_SERVER_PATH}/storage/${imagePath}`
            })

            await newBlog.save()

        } catch (error) {
            return next(error)
        }
        const blogBto = new BlogDTO(newBlog)
        res.status(201).json({blog: blogBto})

    },
    async getAll(req,res,next){
        try {
            const blogs = await Blog.find({});
            const blogsDto = [];

            for(let i=0; i < blogs.length; i++){
                const dto = new BlogDTO(blogs[i]);
                blogsDto.push(dto);
            }

            return res.status(200).json({blogs: blogsDto});

        } catch (error) {
            return next(error);
        }
    },
    async getById(req,res,next){
        const {error} = getByIdSchema.validate(req.params);

        if(error){
            return next(error)
        }

        let blog;

        const {id} = req.params;

        try {
            blog = await Blog.findOne({_id: id}).populate("author")
        } catch (error) {
            return next(error)
        }

        const blogDto = new BlogDetailsDTO(blog);

        res.status(200).json({blog: blogDto})

    },
    async update(req,res,next){
      
        const { error } = updateBlogSchema.validate(req.body);

        const { title, content, author, blogId, photo } = req.body;
    
        // delete previous photo
        // save new photo
    
        let blog;
    
        try {
          blog = await Blog.findOne({ _id: blogId });
        } catch (error) {
          return next(error);
        }
    
        if (photo) {
          let previousPhoto = blog.photoPath;
    
          previousPhoto = previousPhoto.split("/").at(-1);
    
          // delete photo
          fs.unlinkSync(`storage/${previousPhoto}`);
            const buffer = Buffer.from(photo.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), "base64")
            const imagePath = `${Date.now()}-${author}.png`;
    
            try {
                fs.writeFileSync(`storage/${imagePath}`, buffer)
            } catch (error) {
                return next(error);
            }

            await Blog.updateOne({ _id: blogId}, 
                {
                    title, 
                    content, 
                    photoPath: `${BACKEND_SERVER_PATH}/storage/${imagePath}`
                }
            )
        }

        else {
            await Blog.updateOne({ _id: blogId }, { title, content });
          }
      
        return res.status(200).json({ message: "blog updated!" });

    },
    async delete(req,res,next){},

}

module.exports = blogController;