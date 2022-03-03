const express = require("express");
const authService = require("../service/authService");
const studentService = require("../service/studentService");
const router = express.Router();
const auth = require("../middleware/auth");

var today = new Date();
// đếm số tuần giữa 2 ngày
function countWeeks(date1, date2) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay * 7)));
}
const weeknum = countWeeks('2022-02-07', today);

router.get("/", function (req, res, next) {
  res.send("Xin chào, đây là hệ thống API của trang web!");
});

router.post("/login", async function (req, res, next) {
  try {
    const { token } = await authService.login(req.body);
    res.status(200).json({
      token,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid username or password",
    });
  }
});

router.get("/search", async function (req, res, next) {
  try {
    const data = await studentService.searchOneStudentOneWeek(req.query);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

router.get("/weeknum", async function (req, res, next) {
  try {
    const data = weeknum;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

router.get("/searchh", async function (req, res, next) {
  try {
    const data = await studentService.searchOneStudentAllWeek(req.query);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

router.get("/get-all", async function (req, res, next) {
  try {
    const data = await studentService.getAllData();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

router.post("/update", auth.authorization, async function (req, res, next) {
  try {
    const data = await studentService.updateOneStudentOneWeek(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

module.exports = router;
