const express = require('express');
const router = express.Router();
const rewardController = require('../controllers/rewardController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/all_rewards', rewardController.getRewards);
router.post('/claim:id', verifyToken, rewardController.claimReward);
router.get('/claimed_rewards', verifyToken, rewardController.getClaimedRewards);

module.exports = router;