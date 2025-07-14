const Bookmark = require('../models/Bookmark');
const fetchTitle = require('../utils/fetchTitle');

exports.createBookmark = async (req, res, next) => {
  try {
    let { url, title, description, tags } = req.body;
    if (!title) {
      title = await fetchTitle(url);
    }

    const bookmark = new Bookmark({ url, title, description, tags });
    await bookmark.save();
    res.status(201).json(bookmark);
  } catch (err) {
    next(err);
  }
};

exports.getBookmarks = async (req, res, next) => {
  try {
    const { q, tags } = req.query;
    let query = {};

    if (q) query.$or = [{ title: new RegExp(q, 'i') }, { description: new RegExp(q, 'i') }];
    if (tags) query.tags = { $in: tags.split(',') };

    const bookmarks = await Bookmark.find(query);
    res.json(bookmarks);
  } catch (err) {
    next(err);
  }
};

exports.getBookmarkById = async (req, res, next) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    if (!bookmark) return res.status(404).json({ error: 'Bookmark not found' });
    res.json(bookmark);
  } catch (err) {
    next(err);
  }
};

exports.updateBookmark = async (req, res, next) => {
  try {
    const updated = await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Bookmark not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteBookmark = async (req, res, next) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
