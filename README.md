# Hệ thống điểm ý thức (version: 1.4)

Đây là dự án mini của VietTrung. Dùng để nhập, sửa, xóa và hiển thị bảng điểm ý thức của lớp 

## Phiên bản 1.4 có gì hay?

- Update giao diện cực mạnh! 
- Fix lỗi Menu chính bị khuất khi ở chế độ di động
- Thêm chế độ dark-mode 

## Công nghệ

- Front-end:
  - [EJS](https://github.com/mde/ejs), [Tailwind](https://github.com/tailwindlabs/tailwindcss)
- Back-end:
  - [Nodejs](https://github.com/nodejs), [Express](https://github.com/expressjs/express)
  - [Mongodb](https://github.com/mongodb)
  

# Cài đặt

Để chạy dự án này, hãy cài đặt nó cục bộ bằng cách sử dụng npm (hoặc yarm):

```
yarn install
yarn start
```
hoặc chạy bằng nodemon:
```
yarn dev
```
Đường dẫn mặc định là: http://localhost:9001

Thay đổi **API_PATH** và **MONGO_URL** trong `.env` để dự án hoạt động bình thường.
- API_PATH: là đường đẫn API, hãy thay thay thế http://localhost:9001 bằng URL trang web của bạn
- MONGO_URL: là đường dẫn tới cơ sở dữ liệu của bạn, lấy MONGO_URL tại [mongodb.com](https://www.mongodb.com/)

Thay đổi **ADMIN_PASSWORD** trong `.env` thay đổi mật khẩu của quản trị viên.

Cấu trúc json nằm trong thư mục `utils`

## Have good day!
