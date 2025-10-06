const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load courses data from JSON file
const getCoursesData = () => {
  const dataPath = path.join(__dirname, '../data/courses.json');
  const rawData = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(rawData);
};

// GET /courses - Get all courses
router.get('/', (req, res) => {
  try {
    const courses = getCoursesData();
    res.json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching courses',
      error: error.message
    });
  }
});

// GET /courses/:id - Get single course by ID
router.get('/:id', (req, res) => {
  try {
    const courses = getCoursesData();
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: `Course with ID ${courseId} not found`
      });
    }

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching course',
      error: error.message
    });
  }
});

module.exports = router;

