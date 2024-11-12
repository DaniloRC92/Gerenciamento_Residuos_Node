const { createMaterial, getMaterials } = require('../models/material');

function handleCreateMaterial(req, res) {
    const { type, subtype, value } = req.body;
    createMaterial(type, subtype, value)
        .then(() => res.status(201).json({ message: 'Material successfully created' }))
        .catch(err => res.status(500).json({ error: 'Error creating material' }));
}

function handleGetMaterials(req, res) {
    getMaterials()
        .then(results => res.status(200).json(results))
        .catch(err => res.status(500).json({ error: 'Error when searching for materials' }));
}

module.exports = { handleCreateMaterial, handleGetMaterials };
