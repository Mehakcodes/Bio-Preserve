const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/all_projects', projectController.getProjects);
router.get('/project/:id',verifyToken,projectController.getProjectDetails);
router.post('/create_project', verifyToken, projectController.createProject);
router.get('/user_projects', verifyToken, projectController.getUserProjects);

module.exports = router;