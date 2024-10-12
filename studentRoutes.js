const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

// Add a new student
router.post('/', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.json(savedStudent);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
