import UserController from '../controllers/UserController.js';

/**
 * Déclaration de toutes les entrées disponibles du serveur (url)
 */
export default (app) => {
    app.use('/api/users', UserController);
};