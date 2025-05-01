const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { exportTaskReport, exportUsersReport } = require("../controllers/reportController");
const router = express.Router();


router.get("/export/tasks", protect, adminOnly, exportTaskReport); // export all tasks as Excel/PDF
router.get("/export/users", protect, adminOnly, exportUsersReport); // export user-task report


module.exports = router;
