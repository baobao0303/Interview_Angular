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
