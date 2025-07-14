# 📝 Personal Notes & Bookmark Manager - Backend

A RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage personal notes and bookmarks efficiently.

---

## 📚 Features

- CRUD operations for **Notes** and **Bookmarks**
- Search by text and filter by tags
- **URL validation** for bookmarks
- **Auto-fetch title** from bookmark URL (bonus feature)
- Proper HTTP status codes and centralized error handling
- Clean, modular file structure

---

## 🧰 Tech Stack

- **Node.js + Express** – API server
- **MongoDB + Mongoose** – Database and ORM
- **Axios + Cheerio** – For fetching webpage titles from URLs
- **dotenv** – Environment config
- **Nodemon** – Dev server reload

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/personal-notes-bookmarks.git
cd personal-notes-bookmarks/backend

npm install

PORT=5000
MONGO_URI=mongodb://localhost:27017/notes-bookmarks
You can change the MONGO_URI to your MongoDB Atlas URI if needed.

npx nodemon server.js
Server should be running on http://localhost:5000

FolderStructure
backend/
├── controllers/
│   ├── bookmarksController.js
│   └── notesController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   ├── Bookmark.js
│   └── Note.js
├── routes/
│   ├── bookmarks.js
│   └── notes.js
├── utils/
│   └── fetchTitle.js
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
 
 API DOCUMENTATION

| Method | Endpoint         | Description                            |
| ------ | ---------------- | -------------------------------------- |
| POST   | `/api/notes`     | Create a new note                      |
| GET    | `/api/notes`     | Get all notes |
| GET    | `/api/notes/:id` | Get a note by ID                       |
| PUT    | `/api/notes/:id` | Update a note                          |
| DELETE | `/api/notes/:id` | Delete a note                          |


| Method | Endpoint             | Description                                |
| ------ | -------------------- | ------------------------------------------ |
| POST   | `/api/bookmarks`     | Create a new bookmark (auto-fetch title ✅) |
| GET    | `/api/bookmarks`     | List/search bookmarks     |
| GET    | `/api/bookmarks/:id` | Get a bookmark by ID                       |
| PUT    | `/api/bookmarks/:id` | Update a bookmark                          |
| DELETE | `/api/bookmarks/:id` | Delete a bookmark                          |
