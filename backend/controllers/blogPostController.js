import BlogPost from "../models/blogPostModel.js";

const getAllBlogPosts = async (req, res, next) => {
    try{
        const allBlogPosts = await BlogPost.find({});
        res.json(allBlogPosts);
    } catch (error) {
        console.log(error);
    }
};


const getPaginatedBlogPosts= async (req, res, next) =>
{
 try{
       const page= req.params.page;
        const allBlogPosts = await BlogPost.find({}).limit(8).skip(8*(page -1));
        res.json(allBlogPosts);
    } catch (error) {
        console.log(error);
        next(error);
    }
}



const getBlogPostById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const blogPost = await BlogPost.findById(id);
        if (!blogPost) {
            res.sendStatus(404).json("BlogPost not found")
        } else { 
            res.json(blogPost);
        }
    } catch (error) {
        console.log(error);
        next (error);
    }
};


const getBlogPagesCount= async (req, res, next) => {
    try{
        const countAll = await BlogPost.countDocuments();
            const pages = Math.ceil (countAll/8);
            console.log("Retrieved Page Count:", pages);
            res.json(pages);
      } catch (error) { console.log (error);
}
}

export {getAllBlogPosts ,
     getBlogPostById, 
     getPaginatedBlogPosts, 
     getBlogPagesCount};