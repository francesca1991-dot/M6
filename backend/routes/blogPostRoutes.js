import express from "express";
import { getAllBlogPosts, 
    getBlogPostById, 
    getPaginatedBlogPosts,
    getBlogPagesCount
} from "../controllers/blogPostController.js";

const router = express.Router();

router.get( "/count", getBlogPagesCount);
router.get( "/:id", getBlogPostById);
router.get( "/page/:page", getPaginatedBlogPosts);
router.get("/" , getAllBlogPosts);



export {router};