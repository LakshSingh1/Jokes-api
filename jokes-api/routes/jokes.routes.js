// 1. import the controller
const JokesController = require("../controllers/jokes.controllers")
// 2. export a function that reads one argument (app)
module.exports = (app) => {
    app.get("/api/testing", JokesController.apiTest);
    app.get("/api/jokes",JokesController.findAllJokes)
    app.get('/api/jokes/:id', JokesController.findAllJokes);
    app.patch('/api/jokes/:id', JokesController.updateExistingJokes);
    app.post('/api/jokes', JokesController.createNewJokes);
    app.delete('/api/jokes/:id', JokesController.deleteAnExistingJoke);
}
// 3. include all the routes with the corresponding logic from controller
