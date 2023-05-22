const postService = require('../services/blogPost');

function formatPost(post) {
  const { id: postId, title, content, userId, published, updated, User, Categories } = post;
  return {
    id: postId,
    title,
    content,
    userId,
    published,
    updated,
    user: { id: User.id, displayName: User.displayName, email: User.email, image: User.image },
    categories: Categories.map(({ id, name }) => ({ id, name })),
  };
}

async function getPosts(req, res) {
  try {
    const posts = await postService.getAllPosts();

    const formattedPosts = posts.map(formatPost);

    res.status(200).json(formattedPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os posts' });
  }
}

module.exports = { getPosts };
