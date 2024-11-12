const { createCollection, getCollections } = require('../models/collection');

function handleCreateCollection(req, res) {
    const { date, route, materials, weight, vehicle, documents, createdBy } = req.body;
    createCollection(date, route, materials, weight, vehicle, documents, createdBy)
        .then(() => res.status(201).json({ message: 'Collection successfully created' }))
        .catch(err => res.status(500).json({ error: 'Error creating the collection' }));
}

function handleGetCollections(req, res) {
    getCollections()
        .then(results => res.status(200).json(results))
        .catch(err => res.status(500).json({ error: 'Fetching error' }));
}

module.exports = { handleCreateCollection, handleGetCollections };
