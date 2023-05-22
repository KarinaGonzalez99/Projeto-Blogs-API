const { User, Category, BlogPost } = require('../models');

const getPosts = async () => {
  const postBlog = await BlogPost.findAll({
    include: [
      { model: User, 
        as: 'user', 
        attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories' },
    ],
  });
  return postBlog;
};

module.exports = {
  getPosts,
};
