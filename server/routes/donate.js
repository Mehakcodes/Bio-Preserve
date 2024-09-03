const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/user_donations', verifyToken, donationController.getUserDonations);
router.post('/make_donation', verifyToken, donationController.makeDonation);

module.exports = router;
