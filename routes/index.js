var express = require("express");
var router = express.Router();
var CONSTANT = require("../utils/constant");

/* GET login page. */
router.get("/login", function (req, res, next) {
  res.render("login", {
    title: "Đăng nhập",
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    WEEKDAY_COLUMNS: CONSTANT.WEEKDAY_COLUMNS,
    EVALUATE_COLUMNS: CONSTANT.EVALUATE_COLUMNS,
    ALL_STUDENTS: CONSTANT.ALL_STUDENTS,
    ALL_WEEKS: CONSTANT.ALL_WEEKS,
    title: 'Tra cứu từng học sinh',
  });
});

/* GET total page. */
router.get("/view-total", function (req, res, next) {
  res.render("total", {
    WEEKDAY_COLUMNS: CONSTANT.WEEKDAY_COLUMNS,
    EVALUATE_COLUMNS: CONSTANT.EVALUATE_COLUMNS,
    ALL_STUDENTS: CONSTANT.ALL_STUDENTS,
    ALL_WEEKS: CONSTANT.ALL_WEEKS,
    title: 'Bảng điểm cả lớp',
  });
});

module.exports = router;
