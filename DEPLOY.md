# Triển khai VieRad Web 2.2

## Mở trên máy

Chạy `START_LOCAL_WINDOWS.bat`, rồi mở `http://localhost:8080`.

## Netlify

Kéo toàn bộ thư mục web lên Netlify Drop. File `netlify.toml` và hàm proxy `netlify/functions/vierad-api.js` đã có sẵn.

## APK tải từ website

Nút tải đọc file:

```text
downloads/VieRad-current.apk
```

APK hiện kèm trong bản FULL là APK cũ Vy đã gửi, chưa phải bản app 2.2 đã build. Sau khi build app 2.2, thay file đó bằng `app-release.apk` mới và giữ nguyên tên `VieRad-current.apk`.
