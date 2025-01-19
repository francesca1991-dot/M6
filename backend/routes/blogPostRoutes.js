import express from "express";
import { getAllBlogPosts, 
    getBlogPostById, 
    getPaginatedBlogPosts} from "../controllers/blogPostController.js";

const router = express.Router();

router.get("/" , getAllBlogPosts);
router.get( "/page/:page", getPaginatedBlogPosts);
router.get( "/:id", getBlogPostById);




export {router};