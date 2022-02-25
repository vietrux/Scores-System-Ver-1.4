# Hệ thống điểm ý thức (version: 1.4)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/vietrux/Point-System-Ver-1.4)

**(Point-System-Ver-1.4)**

Đây là dự án mini của VietTrung. Dùng để nhập, sửa, xóa và hiển thị bảng điểm ý thức của lớp.

## Mục lục
- [Demo](#demo)
- [Sơ lược tính năng](#sơ-lược-tính-năng)
- [Phiên bản 1.4 có gì mới?](#phiên-bản-14-có-gì-mới)
- [Framework, thư viện,...](#framework-thư-viện)
- [Cài đặt](#cài-đặt)
- [Báo lỗi](#báo-lỗi)
- [Giấy phép](#giấy-phép)

## Demo
LINK: *[https://pointsystem.herokuapp.com](https://pointsystem.herokuapp.com/)*

## Sơ lược tính năng
Hệ thống báo gồm các tính năng:
- Cho phép đăng nhập để:
  - Tạo, sửa, xóa thông tin học sinh, tuần học
  - Tạo, sửa, xóa điểm điểm các tuần
- Hiển thị điểm học sinh từng tuần
- Hiển thị tổng điểm của một học sinh các tuần
- Hiển thị bảng điểm của cả lớp 
- Thay đôỉ giao diện sáng tối

## Phiên bản 1.4 có gì mới

- Update giao diện cực mạnh! 
- Fix lỗi Menu chính bị khuất khi ở chế độ di động
- Thêm chế độ dark-mode 

## Framework, thư viện,...

- Front-end:
  - [EJS](https://github.com/mde/ejs), [Tailwind](https://github.com/tailwindlabs/tailwindcss), [Flowbite](https://github.com/themesberg/flowbite)
- Back-end:
  - [Express](https://github.com/expressjs/express), [Mongoose](https://github.com/Automattic/mongoose)
  - Database: [Mongodb](https://github.com/mongodb)
  

## Cài đặt

Để chạy dự án này, hãy cài đặt nó cục bộ bằng cách sử dụng yarn (hoặc npm):
- cài đặt:
```
yarn install
```
- khởi động dự án:
```
yarn start 
yarn dev  #chạy bằng nodemon (nếu bạn muốn vọc vạch thêm)
```
### Lưu ý!
Đường dẫn mặc định là: *[http://localhost:9001](http://localhost:9001)* (*[http://127.0.0.1:9001](http://127.0.0.1:9001)*)

Thay đổi **API_PATH** và **MONGO_URL** trong **[.env](https://github.com/vietrux/Point-System-Ver-1.4/blob/main/.env)** để dự án hoạt động bình thường.
- API_PATH: là đường đẫn API, hãy thay thay thế *http://<span></span>localhost:9001* bằng URL trang web của bạn
- MONGO_URL: là đường dẫn tới cơ sở dữ liệu của bạn, lấy MONGO_URL tại [mongodb.com](https://www.mongodb.com/)

Thay đổi **ADMIN_PASSWORD** trong **[.env](https://github.com/vietrux/Point-System-Ver-1.4/blob/main/.env)** thay đổi mật khẩu của quản trị viên.

Cấu trúc **database** nằm trong thư mục **[utils](https://github.com/vietrux/Point-System-Ver-1.4/tree/main/utils)**

**Bonus (cho thầy cô)**: Thay đổi số tuần đã trải qua tại [API.JS](https://github.com/vietrux/Point-System-Ver-1.4/blob/main/routes/api.js)

## Báo lỗi
Nếu có phát sinh lỗi hay bất kì vấn đề gì vui lòng [báo lỗi tại đây](https://github.com/vietrux/Point-System-Ver-1.4/issues)

## Giấy phép
PointSystemVer1.4 là trang web tự do nguồn mở. Toàn bộ mã nguồn của PointSystemVer1.4 được phát hành dưới các quy định ghi trong Giấy phép Công cộng GNU (GNU General Public License v3.0).
