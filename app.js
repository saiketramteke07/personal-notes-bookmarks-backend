const express = require('express');
const cors = require('cors');
const notesRoutes = require('./routes/notes');
const bookmarksRoutes = require('./routes/bookmarks');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRoutes);
app.use('/api/bookmarks', bookmarksRoutes);

app.use(errorHandler);

module.exports = app;
