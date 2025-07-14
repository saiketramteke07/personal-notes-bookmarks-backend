const Note = require('../models/Note');

exports.createNote = async (req, res, next) => {
  try {
    const { title, content, tags } = req.body;
    const note = new Note({ title, content, tags });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
};

exports.getNotes = async (req, res, next) => {
  try {
    const { q, tags } = req.query;
    let query = {};

    if (q) query.$or = [{ title: new RegExp(q, 'i') }, { content: new RegExp(q, 'i') }];
    if (tags) query.tags = { $in: tags.split(',') };

    const notes = await Note.find(query);
    res.json(notes);
  } catch (err) {
    next(err);
  }
};

exports.getNoteById = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
  } catch (err) {
    next(err);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedNote) return res.status(404).json({ error: 'Note not found' });
    res.json(updatedNote);
  } catch (err) {
    next(err);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
