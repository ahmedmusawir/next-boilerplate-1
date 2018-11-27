const routes = require('next-routes')();

module.exports = routes;

routes.add('post', '/posts/:id');
routes.add('article', '/article/:id');
// routes.add("about").add("post", "/posts/:id");
