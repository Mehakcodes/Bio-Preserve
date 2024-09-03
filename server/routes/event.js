const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/all_events', eventController.getEvents);
router.post('/create_event',verifyToken, eventController.createEvent);
router.post('/attend_event', verifyToken, eventController.attendEvent);
router.get('/event_details/:id', verifyToken, eventController.getEventDetails);
router.get('/user_hosted_events', verifyToken, eventController.getUserHostedEvents);
router.get('/user_attended_events', verifyToken, eventController.getUserAttendedEvents);

module.exports = router;

