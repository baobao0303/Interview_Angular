# Routing & Navigation trong Angular

Dưới đây là các khái niệm và câu hỏi phỏng vấn thường gặp về Routing trong Angular, được trích xuất từ tài liệu Bootcamp:

### 1. Angular Routing là gì?

**Trả lời:**
Routing là một tính năng trong Angular cho phép điều hướng (navigate) giữa các views hoặc components khác nhau bằng cách sử dụng các đường dẫn URL, mà không cần phải tải lại (reload) toàn bộ trang web (phù hợp với kiến trúc Single Page Application).

### 2. Vai trò của `provideRouter` là gì?

**Trả lời:**
`provideRouter` là một hàm được sử dụng trong Angular để kích hoạt tính năng routing bằng cách cung cấp các cấu hình route ngay trong quá trình khởi động ứng dụng. (Thường được đăng ký tại file `app.config.ts` đối với Standalone Architecture).

### 3. File `app.routes.ts` dùng để làm gì?

**Trả lời:**
`app.routes.ts` là file cấu hình routing chính. Nó chứa mảng `Routes`, trong đó mỗi object sẽ định nghĩa sự ánh xạ (mapping) giữa một đường dẫn URL (path) và component tương ứng sẽ được tải. Nó cũng được dùng để thiết lập **default route** bằng thuộc tính `redirectTo`.

### 4. Phân biệt `routerLink` và `router-outlet`?

**Trả lời:**

- **`router-outlet`**: Là một directive đóng vai trò như một vùng chứa (placeholder). Khi bạn chuyển đổi URL, nội dung của component tương ứng sẽ được render tại vị trí đặt `router-outlet`.
- **`routerLink`**: Là một directive dùng thay cho thuộc tính `href` trong thẻ `<a>`. Nó giúp điều hướng sang các component khác bằng URL mà không làm mới (refresh) lại toàn bộ trang.

### 5. Thuộc tính `routerLinkActive` có tác dụng gì?

**Trả lời:**
`routerLinkActive` là một directive tự động thêm một class CSS (ví dụ: `active`) vào thẻ link hiện tại nếu URL đang trùng khớp với đường dẫn mà thẻ link đó trỏ đến. Rất hữu ích trong việc bôi đậm hoặc làm nổi bật thanh menu đang được chọn.

### 6. Wildcard Route (`**`) là gì?

**Trả lời:**

- **Wildcard Route** được dùng để xử lý các đường dẫn URL không hợp lệ hoặc không có trong cấu hình.
- Thường được sử dụng để điều hướng người dùng tới trang lỗi **404 Page Not Found** hoặc trang chủ.
- **Lưu ý quan trọng**: Phải luôn đặt Wildcard Route ở **cuối cùng** của mảng `routes` vì Angular sẽ kiểm tra đường dẫn theo thứ tự từ trên xuống dưới.
