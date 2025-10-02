const express = require('express');
const cors = require('cors');
const coursesRouter = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/courses', coursesRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'University Course Finder API',
    version: '1.0.0',
    endpoints: {
      getAllCourses: 'GET /api/courses',
      getCourseById: 'GET /api/courses/:id'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/courses`);
});
