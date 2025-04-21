const express = require('express');
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
app.use(express.json());

app.use('/', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
