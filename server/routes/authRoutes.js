const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');

const router = express.Router();

// Auth routes

router.post('/register', registerUser); // Register a new user
router.post('/login', loginUser); // Login a user
router.get('/profile', protect, getUserProfile); // Get user profile
router.put('/profile', protect, updateUserProfile); // Update profile

router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "no file uploaded" });
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
    }`;
    res.status(200).json({ imageUrl });
});

module.exports = router;