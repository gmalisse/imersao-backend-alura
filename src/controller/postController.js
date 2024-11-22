import getTodosPosts from "../models/postModels.js";

// Define uma rota GET em "/posts" para retornar todos os posts
export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);    
} 
    
