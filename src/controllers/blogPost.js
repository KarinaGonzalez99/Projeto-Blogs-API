const postService = require('../services/blogPost');

const getPosts = async (req, res) => {
  try { 
    const postBlog = await postService.getPosts();
    return res.status(200).json(postBlog);
} catch (error) {
    return res.status(500).json({ message: error.message });
}
};

module.exports = {
  getPosts,
};
