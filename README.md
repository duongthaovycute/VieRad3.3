# VieRad Web 2.2

Website tĩnh song ngữ Việt/Anh dành cho hệ thống giám sát bức xạ VieRad.

## Điểm chính

- Dashboard số lớn, tự cập nhật từ API NEW.
- Đổi ngôn ngữ toàn bộ giao diện, gồm tên trạm mặc định, popup, trạng thái, lịch sử và cài đặt.
- Hỗ trợ nhiều trạm nếu API trả nhiều mã trạm.
- Lịch sử cục bộ tối đa 10.000 mẫu; mặc định 2.000 mẫu.
- Lọc theo trạm, thời gian, mức cảnh báo và khoảng ngày giờ tùy chọn.
- Phân trang, thống kê min/avg/max, xem chi tiết từng bản ghi.
- Xuất CSV, xuất JSON, nhập lại JSON.
- Trung tâm cảnh báo theo ngưỡng.
- Cài URL API, tên trạm, chu kỳ cập nhật, giới hạn lịch sử và ngưỡng ngay trên web.
- Giao diện sáng/tối, PWA, responsive.
- Nút tải APK có sẵn.

## Mở thử trên Windows

Chạy `START_LOCAL_WINDOWS.bat`, sau đó mở `http://localhost:8080`.

## Đưa lên Netlify

Kéo toàn bộ thư mục này vào Netlify Drop. Hàm `netlify/functions/vierad-api.js` làm proxy cho API mặc định khi trình duyệt bị CORS.

## Thay APK sau khi build app mới

1. Xóa `downloads/VieRad-current.apk`.
2. Chép APK mới vào đúng tên `downloads/VieRad-current.apk`.
3. Triển khai lại website.

Lưu ý: lịch sử trên web được lưu riêng trong trình duyệt của từng người dùng, không phải cơ sở dữ liệu máy chủ.
