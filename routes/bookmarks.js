const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookmarksController');

router.post('/', controller.createBookmark);
router.get('/', controller.getBookmarks);
router.get('/:id', controller.getBookmarkById);
router.put('/:id', controller.updateBookmark);
router.delete('/:id', controller.deleteBookmark);

module.exports = router;
