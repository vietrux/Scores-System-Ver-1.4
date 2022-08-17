const CONSTANT = {
  WEEKDAY_COLUMNS: [
    {
      label: "Thứ 2",
      value: "MONDAY",
    },
    {
      label: "Thứ 3",
      value: "TUESDAY",
    },
    {
      label: "Thứ 4",
      value: "WEDNESDAY",
    },
    {
      label: "Thứ 5",
      value: "THUSDAY",
    },
    {
      label: "Thứ 6",
      value: "FRIDAY",
    },
    {
      label: "Thứ 7",
      value: "SATURDAY",
    },
    {
      label: "CN",
      value: "SUNDAY",
    },
  ],
  EVALUATE_COLUMNS: [
    {
      label: "X.dựng bài trên 3 lần",
      value: 0,
    },
    {
      label: "K.tra bài cũ trên 9 ",
      value: 1,
    },
    {
      label: "K.tra đề chung trên 9",
      value: 2,
    },
    {
      label: "V.nghệ, T.dục,...",
      value: 3,
    },
    {
      label: "Mất trật tự",
      value: 4,
    },
    {
      label: "Đổi chỗ",
      value: 5,
    },
    {
      label: "Thiếu đồ dùng",
      value: 6,
    },
    {
      label: "K.tra bài cũ dưới 5",
      value: 7,
    },
    {
      label: "X.dựng bài dưới 3 lần",
      value: 8,
    },
    {
      label: "Thiếu đ.phục",
      value: 9,
    },
    {
      label: "Thiếu thẻ h.sinh",
      value: 10,
    },
    {
      label: "Xe đạp, ko mũ bh",
      value: 11,
    },
    {
      label: "Đi muộn, ko phép",
      value: 12,
    },
    {
      label: "V.phạm ATGT",
      value: 13,
    },
    {
      label: "Đánh nhau",
      value: 14,
    },
    {
      label: "Trừ theo đvị trường",
      value: 15,
    },
  ],
  ALL_STUDENTS: [
    {
      id: "1",
      name: "Lê Quốc Anh",
    },
    {
      id: "2",
      name: "Mạc Quế Anh",
    },
    {
      id: "3",
      name: "Nguyễn Thị Ngọc Anh",
    },
    {
      id: "4",
      name: "Nguyễn Thị Quỳnh Anh",
    },
    {
      id: "5",
      name: "Phạm Ngọc Anh",
    },
    {
      id: "6",
      name: "Tăng Thị Phương Anh",
    },
    {
      id: "7",
      name: "Phạm Huyền Chi",
    },
    {
      id: "8",
      name: "Phạm Thị Dịu",
    },
    {
      id: "9",
      name: "Nguyễn Thị Thùy Dung",
    },
    {
      id: "10",
      name: "Bùi Thái Dương",
    },
    {
      id: "11",
      name: "Lê Viết Dương",
    },
    {
      id: "12",
      name: "Lương Thu Hằng",
    },
    {
      id: "13",
      name: "Lê Thị Thu Hiền",
    },
    {
      id: "14",
      name: "Bùi Quang Huy",
    },
    {
      id: "15",
      name: "Trần Thu Huyền",
    },
    {
      id: "16",
      name: "Nguyễn Thị Quỳnh Hương",
    },
    {
      id: "17",
      name: "Lê Quốc Khánh",
    },
    {
      id: "18",
      name: "Mạc Thị Ngọc Linh",
    },
    {
      id: "19",
      name: "Nguyễn Thùy Linh",
    },
    {
      id: "20",
      name: "Tăng Ngọc Linh",
    },
    {
      id: "21",
      name: "Vũ Thị Ngọc Linh",
    },
    {
      id: "22",
      name: "Lê Thị Mai Loan",
    },
    {
      id: "23",
      name: "Nguyễn Thị Hà Ly",
    },
    {
      id: "24",
      name: "Phạm Thị Khánh Ly",
    },
    {
      id: "25",
      name: "Tiêu Ngọc Minh",
    },
    {
      id: "26",
      name: "Vũ Tuấn Nam",
    },
    {
      id: "27",
      name: "Phạm Thị Yến Nhi",
    },
    {
      id: "28",
      name: "Lý Anh Quân",
    },
    {
      id: "29",
      name: "Dương Thúy Quỳnh",
    },
    {
      id: "30",
      name: "Nguyễn Thị Phương Quỳnh",
    },
    {
      id: "31",
      name: "Nguyễn Thị Phương Thanh",
    },
    {
      id: "32",
      name: "Bùi Như Tiến Thành",
    },
    {
      id: "33",
      name: "Nguyễn Thanh Thảo",
    },
    {
      id: "34",
      name: "Đoàn Thị Minh Thư",
    },
    {
      id: "35",
      name: "Nguyễn Công Tuấn",
    },
    {
      id: "36",
      name: "Nguyễn Xuân Tuấn",
    },
    {
      id: "37",
      name: "Vũ Thị Tố Uyên",
    },
    {
      id: "38",
      name: "Phan Nhật Vũ",
    },
  ],
  ALL_WEEKS: [
    { "id": 1, "name": "Tuần 1" },
    { "id": 2, "name": "Tuần 2" },
    { "id": 3, "name": "Tuần 3" },
    { "id": 4, "name": "Tuần 4" },
    { "id": 5, "name": "Tuần 5" },
    { "id": 6, "name": "Tuần 6" },
    { "id": 7, "name": "Tuần 7" },
    { "id": 8, "name": "Tuần 8" },
    { "id": 9, "name": "Tuần 9" },
    { "id": 10, "name": "Tuần 10" },
    { "id": 11, "name": "Tuần 11" },
    { "id": 12, "name": "Tuần 12" },
    { "id": 13, "name": "Tuần 13" },
    { "id": 14, "name": "Tuần 14" },
    { "id": 15, "name": "Tuần 15" },
    { "id": 16, "name": "Tuần 16" },
    { "id": 17, "name": "Tuần 17" },
    { "id": 18, "name": "Tuần 18" },
    { "id": 19, "name": "Tuần 19" },
    { "id": 20, "name": "Tuần 20" },
    { "id": 21, "name": "Tuần 21" },
    { "id": 22, "name": "Tuần 22" },
    { "id": 23, "name": "Tuần 23" },
    { "id": 24, "name": "Tuần 24" },
    { "id": 25, "name": "Tuần 25" },
    { "id": 26, "name": "Tuần 26" },
    { "id": 27, "name": "Tuần 27" },
    { "id": 28, "name": "Tuần 28" },
    { "id": 29, "name": "Tuần 29" },
    { "id": 30, "name": "Tuần 30" },
    { "id": 31, "name": "Tuần 31" },
    { "id": 32, "name": "Tuần 32" },
    { "id": 33, "name": "Tuần 33" },
    { "id": 34, "name": "Tuần 34" },
    { "id": 35, "name": "Tuần 35" },
    { "id": 36, "name": "Tuần 36" },
    { "id": 37, "name": "Tuần 37" },
    { "id": 38, "name": "Tuần 38" },
    { "id": 39, "name": "Tuần 39" },
    { "id": 40, "name": "Tuần 40" },
    { "id": 41, "name": "Tuần 41" },
    { "id": 42, "name": "Tuần 42" },
    { "id": 43, "name": "Tuần 43" }]
};

module.exports = CONSTANT;
