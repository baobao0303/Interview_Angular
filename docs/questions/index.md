# 🙋 Câu hỏi & Giải đáp Angular Cơ Bản

Đây là không gian dành riêng để lưu trữ các câu hỏi, thắc mắc và giải đáp của bạn trong quá trình tìm hiểu về **Angular Core**. Dưới đây là những câu hỏi thường gặp nhất khi phỏng vấn:

---

### Q1. What is Angular?
**Trả lời:**
- Angular is a component-based front-end framework used to build dynamic single-page web applications (SPAs) using TypeScript.
*(Dịch: Angular là một framework front-end hướng component, được sử dụng để xây dựng các ứng dụng web một trang động (SPAs) bằng TypeScript.)*

**Các đặc điểm chính của Angular:**
1. **Component-based architecture:** Ứng dụng được chia nhỏ thành các component độc lập, dễ dàng tái sử dụng và bảo trì.
2. **TypeScript:** Cung cấp strict typing giúp bắt lỗi ngay trong quá trình phát triển và hỗ trợ OOP tốt.
3. **Dependency Injection (DI):** Giúp Angular quản lý và phân phối hiệu quả các service/dependency cho các component.
4. **Two-way Data Binding:** Tự động đồng bộ hóa dữ liệu giữa Model (TS) và View (HTML).
5. **Toàn diện (Comprehensive):** Cung cấp sẵn Routing, Form handling, HTTP Client,...

---

### Q2. Component vs Directive khác nhau như thế nào?
**Trả lời:**
- **Component (`@Component`)**: Là một loại Directive đặc biệt **có chứa View (HTML template)**. Nó được dùng để tạo ra các phần tử UI hiển thị trực quan trên màn hình (Ví dụ: HeaderComponent, ProductListComponent).
- **Directive (`@Directive`)**: Là các class có khả năng thay đổi hành vi hoặc giao diện của các phần tử DOM hiện có. Nó **không có View (Template)**. Ví dụ: `NgClass`, `NgStyle` (Attribute Directive đổi style) hoặc `*ngIf`, `*ngFor` (Structural Directive thao tác với DOM).

---

### Q3. So sánh Lazy Loading vs Eager Loading?
**Trả lời:**
- **Eager Loading**: (Mặc định) Toàn bộ code của ứng dụng sẽ được tải về trình duyệt ngay từ lần đầu tiên truy cập. Điều này làm trang khởi động ban đầu rất chậm nếu ứng dụng lớn.
- **Lazy Loading**: Chỉ tải những phần code cần thiết theo yêu cầu (on-demand). Khi người dùng bấm vào một Route cụ thể, Angular mới tải module chứa chức năng đó về. Giúp tối ưu kích thước gói tải ban đầu (initial payload) và tăng tốc độ tải trang.

---

### Q4. So sánh `routerLink` vs `href`?
**Trả lời:** Cả hai đều dùng để điều hướng trong thẻ `<a>`, nhưng:
- **`href`**: Là thuộc tính chuẩn của HTML. Khi bấm vào, nó sẽ gửi request lên server và **load lại toàn bộ trang web (full page reload)**. Điều này làm mất trạng thái (state) hiện tại và phá vỡ trải nghiệm Single Page Application (SPA).
- **`routerLink`**: Là directive của Angular dùng để điều hướng nội bộ. Nó thay đổi URL và load component tương ứng mà **không hề load lại trang**, mang lại trải nghiệm mượt mà siêu tốc của SPA.

---

### Q5. Sự khác biệt giữa `ActivatedRoute` và `Router`?
**Trả lời:**
- **`Router`**: Cung cấp các hàm để **thực hiện hành động điều hướng** (navigation) thông qua code TypeScript. Ví dụ: Khi user bấm nút Submit, bạn gọi `this.router.navigate(['/home'])` để chuyển trang.
- **`ActivatedRoute`**: Cung cấp **thông tin về Route đang được kích hoạt** ở thời điểm hiện tại. Dùng để trích xuất các tham số từ URL. Ví dụ: Để lấy ID trên URL `/user/123`, bạn gọi `this.route.snapshot.paramMap.get('id')`.

---

### Q6. So sánh Angular's `HttpClient` vs `Http service`?
**Trả lời:**
- **`Http service` (`@angular/http`)**: Là module cũ từ thời Angular 2. Nó đã bị coi là lỗi thời (deprecated) và bị loại bỏ hoàn toàn kể từ Angular 8+.
- **`HttpClient` (`@angular/common/http`)**: Là module mới, hiện đại hơn được ra mắt từ Angular 4.3. Nó vượt trội hơn vì:
  1. Tự động parse chuỗi JSON thành object (không cần phải gọi `res.json()` như bản cũ).
  2. Hỗ trợ Strong-typing thông qua Generic Types (ví dụ: `http.get<User>('/api/user')`).
  3. Dễ dàng sử dụng **Interceptors** để đánh chặn request/response (thêm Auth Token).
  4. Hỗ trợ theo dõi tiến trình upload/download (Progress Events).
