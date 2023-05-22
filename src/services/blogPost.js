const { BlogPost, User, Category } = require('../models');

async function getAllPosts() {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, attributes: ['id', 'displayName', 'email', 'image'] },
        { model: Category, attributes: ['id', 'name'] },
      ],
    });

    return posts;
  } catch (error) {
    throw new Error('Erro ao buscar os posts');
  }
}

module.exports = {
  getAllPosts,
};
