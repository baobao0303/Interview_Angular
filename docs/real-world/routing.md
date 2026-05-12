# Routing & Navigation trong Angular

Dưới đây là các câu hỏi phỏng vấn thực tế và cấu hình (implementation) về Routing trong Angular:

### Q. What is Angular Routing?
❖ **Angular Routing** là một tính năng trong Angular cho phép điều hướng (navigation) giữa các views hoặc components khác nhau bằng cách sử dụng các đường dẫn URL mà không cần phải tải lại toàn bộ trang web (without reloading the entire web page).

---

### Q. How do we implement Routing? What is the role of `provideRouter`?
❖ `provideRouter` là một hàm được sử dụng trong Angular để kích hoạt tính năng routing bằng cách cung cấp các cấu hình route ngay trong quá trình khởi động ứng dụng (application startup).

```typescript
// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
```

---

### Q. What is the role of `app.routes.ts` in routing implementation?
❖ **Routes Array** là một mảng cấu hình của Angular, nơi mỗi đối tượng (route object) sẽ định nghĩa một đường dẫn URL (path) và component tương ứng sẽ được load cho đường dẫn đó.

❖ **`app.routes.ts`** là file cấu hình routing chính trong Angular. Nó chứa mảng `Routes` dùng để ánh xạ (mapping) các đường dẫn URL tới component tương ứng.

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  
  // default route
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
```

❖ **Default route**: Được sử dụng để tự động chuyển hướng người dùng tới một component cụ thể khi không có đường dẫn URL nào được cung cấp.

---

### Q. What is the role of `routerLink` and `router-outlet` in routing implementation?
❖ **`routerLink`**: Là một directive của Angular dùng để điều hướng giữa các component bằng URL mà không làm mới lại toàn bộ trang.
❖ **`router-outlet`**: Là một directive đóng vai trò như một placeholder (vùng chứa) hiển thị các component được định tuyến dựa trên URL hiện tại.

```html
<!-- app.component.html -->
<nav>
  <a routerLink="/home">Home</a> |
  <a routerLink="/about">About</a>
</nav>

<!-- Nơi component tương ứng với URL sẽ được hiển thị -->
<router-outlet></router-outlet>
```

---

### Q. Summarize Angular Routing Working?
Quá trình hoạt động của Angular Routing tóm tắt như sau:
1. Người dùng bấm vào thẻ `<a>` có chứa `routerLink="/home"`.
2. Trình duyệt thay đổi thanh URL thành `/home` nhưng ngăn chặn hành vi load lại trang mặc định của thẻ `<a>`.
3. Router của Angular bắt được sự thay đổi URL này, dò tìm trong mảng `Routes` (được cấu hình ở `app.routes.ts`).
4. Khi tìm thấy `{ path: 'home', component: HomeComponent }`, Router sẽ khởi tạo `HomeComponent`.
5. Sau đó, nó chèn nội dung của `HomeComponent` vào đúng vị trí thẻ `<router-outlet>` trên màn hình.

---

### Q. Thuộc tính `routerLinkActive` có tác dụng gì? *(Bổ sung)*
❖ `routerLinkActive` là một directive tự động thêm một class CSS (ví dụ: `active`) vào thẻ link hiện tại nếu URL đang trùng khớp với đường dẫn mà thẻ link đó trỏ đến. Rất hữu ích trong việc làm nổi bật thanh menu đang được chọn.

### Q. Wildcard Route (`**`) là gì? *(Bổ sung)*
❖ **Wildcard Route** được dùng để xử lý các đường dẫn URL không hợp lệ hoặc không có trong cấu hình, thường để điều hướng người dùng tới trang **404 Page Not Found**. 
*Lưu ý: Phải luôn đặt Wildcard Route ở cuối cùng của mảng `routes` vì Angular sẽ kiểm tra đường dẫn từ trên xuống dưới.*
