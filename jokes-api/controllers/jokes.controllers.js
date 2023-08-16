// 1. import the model
const Jokes = require("../models/jokes.model");

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res) => {
    res.json({ message: "ok" });
};

// Example:
module.exports.findAllJokes = (req, res) => {
    User.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports.findOneSingleJoke = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then((oneSingleJoke) => {
            res.json({ user: oneSingleJoke });
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports.createNewJokes = (req, res) => {
    User.create(req.body)
        .then((newlyCreatedJokes) => {
            res.json({ user: newlyCreatedJokes });
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports.updateExistingJokes = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke) => {
            res.json({ user: updatedJoke });
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports.deleteAnExistingJoke = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json(err);
        });
};
