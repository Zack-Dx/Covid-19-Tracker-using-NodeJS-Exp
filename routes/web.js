// Controller Imports
const { homeController } = require('../controllers/homeController.js');

// Routing
function initRoutes(router) {
    router.get('/', homeController.index);
}
module.exports = { initRoutes };
