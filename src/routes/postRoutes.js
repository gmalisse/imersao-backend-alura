import express from "express";
import { listarPosts } from "../controller/postController.js";

const routes = (app) => {
    // Configura a aplicação para interpretar requisições com JSON no corpo
    app.use(express.json());
    
    app.get('/posts', listarPosts);
}

export default routes;
