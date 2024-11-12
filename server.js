const express = require('express');
const authRoutes = require('./routes/authRoutes');
const collectionRoutes = require('./routes/collectionsRoutes');
const materialRoutes = require('./routes/materialRoutes');
const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/materials', materialRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});