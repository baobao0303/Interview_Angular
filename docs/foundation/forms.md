# Forms in Angular

Angular cung cấp 2 cách chính để xử lý Form: **Template-driven Forms** và **Reactive Forms**. Dưới đây là những khái niệm cốt lõi cần nắm vững.

### Q1. What are Angular Forms?

**Trả lời:**
❖ **Angular Forms** là một tính năng trong Angular được sử dụng để tạo và quản lý biểu mẫu (forms). Nó cung cấp các công cụ kiểm tra tính hợp lệ (validation), theo dõi sự thay đổi trạng thái và giá trị của form.

---

### Q2. What are Template Driven Forms?

**Trả lời:**
❖ **Template-Driven Forms** là các biểu mẫu Angular mà hầu hết logic form và validation đều được viết trực tiếp trong file HTML (template) thông qua việc sử dụng các directives (chỉ thị) như `ngModel` và `ngForm`.

---

### Q3. What are ngModel and FormControl?

**Trả lời:**
❖ **ngModel** là một Angular directive giúp chuyển đổi một thẻ `input` HTML thông thường thành một **Angular form control**. Nó giúp theo dõi giá trị và trạng thái xác thực (validation) của element đó.
❖ **Angular Form Control** (đại diện bởi class `FormControl`) là một object lưu trữ và quản lý trạng thái, giá trị của **một trường nhập liệu duy nhất** (single input field) trong form.

---

### Q4. What is Template Reference Variable?

**Trả lời:**
❖ **Template reference variable** (được đánh dấu bằng ký hiệu `#`) được sử dụng để tạo một biến tham chiếu ngay trong HTML template, cho phép truy cập trực tiếp vào một DOM element hoặc một directive/component từ bên trong template.

**Ví dụ với Angular Template Form:**
```html
<form>
  <input
    type="text"
    name="username"
    ngModel
    minlength="3"
    #username="ngModel"
    placeholder="Enter username"
  >
  <!-- Sử dụng template reference variable #username để kiểm tra lỗi -->
  <p *ngIf="username.invalid" style="color: red;">
    Username must be at least 3 characters
  </p>
</form>
```

---

### Q5. What is ngForm and FormGroup?

**Trả lời:**
❖ **ngForm** là một Angular directive tự động được gắn vào thẻ `<form>`, làm nhiệm vụ quản lý toàn bộ biểu mẫu và theo dõi giá trị cũng như trạng thái xác thực (validation state) của **tất cả** các input fields bên trong nó.
❖ **FormGroup** là một object của Angular đại diện cho toàn bộ biểu mẫu, làm nhiệm vụ quản lý một **tập hợp** các `FormControl` objects bên trong.

**Ví dụ cấu trúc ngForm:**
```html
<h2>Angular Template Form</h2>
<!-- Tạo biến #f tham chiếu đến ngForm -->
<form #f="ngForm">
  <input
    type="text"
    name="username"
    ngModel
    minlength="3"
    #username="ngModel"
    placeholder="Enter username"
  >
  
  <p *ngIf="username.invalid" style="color: red;">
    Username must be at least 3 characters
  </p>
  
  <!-- Sử dụng biến #f để kiểm tra toàn bộ form -->
  <p *ngIf="f.invalid" style="color: blue;">
    Form is invalid
  </p>
</form>
```

---

### Q6. What are Reactive Forms?

**Trả lời:**
❖ **Reactive Forms** là các biểu mẫu Angular mà cấu trúc form và logic được định nghĩa trực tiếp trong Component class (file `.ts`) bằng cách sử dụng các class như `FormControl` và `FormGroup`.

---

### Q7. How to implement Reactive Form using FormGroup and FormControl?

**Trả lời:**
❖ Trong Reactive Forms, **FormGroup** là một class được dùng để tạo ra một object FormGroup, nó chứa nhiều object FormControl bên trong một biểu mẫu duy nhất.
❖ **FormControl** là một class được dùng để tạo ra một object đại diện và quản lý một trường nhập liệu (form field) duy nhất.

**Ví dụ (.ts):**
```typescript
import { FormGroup, FormControl } from '@angular/forms';

export class ReactiveForm {
  usernameForm = new FormGroup({
    username: new FormControl(''),
  });
}
```

---

### Q8. How to use Validators class in Reactive Forms?

**Trả lời:**
❖ Trong Reactive Forms, **Validators** là một class được sử dụng để áp dụng các quy tắc xác thực (validation rules) lên `FormControl` hoặc `FormGroup`.

**Ví dụ (.ts):**
```typescript
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class ReactiveForm {
  usernameForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(3)]),
  });
}
```

---

### Q9. How to bind Reactive Form to HTML using formGroup and formControlName?

**Trả lời:**
❖ **formGroup** là một Angular directive được sử dụng để liên kết (bind) một object `FormGroup` với một thẻ form HTML.
❖ **formControlName** là một Angular directive được sử dụng để liên kết một thẻ input với một `FormControl` cụ thể bên trong một `FormGroup` thông qua string key (tên trường).

**Ví dụ:**
```html
<!-- .html -->
<form [formGroup]="usernameForm">
  <input type="text" formControlName="username" placeholder="Enter username">
  <p *ngIf="usernameForm.get('username')?.invalid && usernameForm.get('username')?.touched" style="color: red;">
    Username must be at least 3 characters
  </p>
</form>
```

```typescript
// .ts
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class ReactiveForm {
  usernameForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(3)]),
  });
}
```

---

### Q10. How to simplify FormControl access using a getter in Reactive Forms?

**Trả lời:**
❖ Trong Reactive Forms, một **getter** thường được sử dụng để dễ dàng truy cập vào `FormControl` từ `FormGroup` ngay trong template (tránh việc phải gọi `.get('key')` liên tục).

**Ví dụ:**
```html
<!-- .html -->
<form [formGroup]="usernameForm">
  <input type="text" formControlName="username" placeholder="Enter username">
  <!-- Dùng getter 'username' ngắn gọn hơn thay vì usernameForm.get('username') -->
  <p *ngIf="username?.invalid && username?.touched" style="color: red;">
    Username must be at least 3 characters
  </p>
</form>
```

```typescript
// .ts
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class ReactiveForm {
  usernameForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(3)]),
  });

  get username() {
    return this.usernameForm.get('username');
  }
}
```

---

### Q11. When to use Template driven forms and when to use Reactive forms?

**Trả lời:**
❖ **Sử dụng Template Forms khi:**
- Biểu mẫu nhỏ gọn, đơn giản và không có quá nhiều thay đổi động.
- Ví dụ: Login form, Contact form, form phản hồi đơn giản hoặc đăng ký cơ bản (từ 2 đến 5 trường nhập liệu).

❖ **Sử dụng Reactive Forms khi:**
- Biểu mẫu lớn, phức tạp và có tính động cao.
- Ví dụ: Các form đăng ký nhiều bước (multi-step signup forms), form có cấu trúc phức tạp, hoặc form có thể thêm/bớt các trường động (dynamic fields).

---

### Q12. Tại sao lại cần sử dụng `afterNextRender` khi thao tác với Form và LocalStorage?

**Trả lời:**
Khi bạn làm việc với các ứng dụng Angular có bật **Server-Side Rendering (SSR)** hoặc **Prerendering (SSG)**, mã nguồn của bạn ban đầu sẽ được chạy trên môi trường Server (Node.js) chứ không phải trình duyệt (Browser).

Môi trường Node.js **không có** đối tượng `window` hay `document` (ví dụ: `window.localStorage` không tồn tại trên server và sẽ ném ra lỗi làm crash ứng dụng).

❖ Hàm `afterNextRender()` trong Angular đảm bảo rằng đoạn code bên trong nó **chỉ được thực thi ở phía Browser (Client-side)** và **chỉ chạy sau khi quá trình render kết thúc**. Điều này giúp ứng dụng an toàn truy cập vào `window.localStorage` để lưu trữ dữ liệu form đang nhập dở (như email) mà không gây lỗi trên server.

---

### Q13. Vai trò của `destroyRef.onDestroy` trong đoạn code lắng nghe Form changes là gì?

**Trả lời:**
Khi bạn `.subscribe()` vào một Observable (ví dụ: `this.form().valueChanges`), một luồng dữ liệu (stream) được mở ra và nó sẽ liên tục lắng nghe. 

Nếu bạn chuyển sang một trang khác, Component chứa form bị hủy đi (destroyed), nhưng cái Subscription này vẫn nằm lại trong bộ nhớ vì không ai dọn dẹp nó. Lâu dần sẽ dẫn đến tình trạng rò rỉ bộ nhớ (**Memory Leak**).

❖ **Tại sao lại dùng `destroyRef.onDestroy`?**
- `DestroyRef` (xuất hiện từ Angular 16) là một cách hiện đại để đăng ký một hàm callback dọn dẹp khi Component bị hủy.
- Ở đây, `this.destroyRef.onDestroy(() => subscription?.unsubscribe())` đảm bảo rằng ngay khi Component chết đi, chúng ta sẽ **hủy bỏ lắng nghe (unsubscribe)** Form `valueChanges`.
- Cú pháp này vô cùng linh hoạt vì nó có thể được viết ngay bên trong `constructor` hoặc bất kỳ hàm nào mà không cần phải `implements OnDestroy` hay tạo hàm `ngOnDestroy()` truyền thống trên class.
