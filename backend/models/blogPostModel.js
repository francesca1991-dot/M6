import mongoose from "mongoose";
import "dotenv/config";

const blogPostSchema = new mongoose.Schema({
    categoria: String,
    titolo: String,
    cover: String,
    readTime: {
        value: Number, 
        unit: String,
    },
    author: String,
    content: String,
});

const BlogPost = new mongoose.model(
    process.env.BLOGPOST_COLLECTION,
    blogPostSchema
);
export default BlogPost;