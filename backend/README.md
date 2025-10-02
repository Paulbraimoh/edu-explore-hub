# University Course Finder - Backend API

This is the Node.js + Express backend for the University Course Finder application.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Run the Server**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

3. **Server will run on:** `http://localhost:5000`

## API Endpoints

### Get All Courses
- **URL:** `GET /api/courses`
- **Response:** Array of all courses with metadata
- **Example:**
  ```json
  {
    "success": true,
    "count": 10,
    "data": [...]
  }
  ```

### Get Single Course
- **URL:** `GET /api/courses/:id`
- **Response:** Single course object
- **Example:** `GET /api/courses/1`
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "title": "Computer Science BSc",
      "university": "University of Lagos",
      ...
    }
  }
  ```

## Project Structure

```
backend/
├── server.js           # Main Express server
├── routes/
│   └── courses.js      # Course API routes
├── data/
│   └── courses.json    # Mock course data
├── package.json        # Dependencies
└── README.md          # Documentation
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **JSON** - Data storage format

## Notes

- Data is stored in `data/courses.json` file
- CORS is enabled for frontend integration
- No database required - uses file-based JSON storage
