# Signals trong Angular

### Q1. Signals là gì? Sự khác biệt cốt lõi giữa Signals và Change Detection truyền thống?

**Trả lời:**
Để hiểu rõ giá trị của Signals, trước tiên chúng ta cần nhắc lại về **Change Detection**:

- **Change Detection** là quá trình Angular kiểm tra toàn bộ ứng dụng để phát hiện sự thay đổi dữ liệu, từ đó cập nhật lại giao diện (UI).
- **Nhược điểm:** Cơ chế Change Detection truyền thống (dựa vào Zone.js) sẽ quét và kiểm tra **rất nhiều bindings (ràng buộc dữ liệu)** trên giao diện, kể cả những nơi không hề có sự thay đổi. Điều này có thể gây giảm hiệu năng.

**Ngược lại, Signals ra đời để giải quyết vấn đề trên:**

- **Signal** là một giá trị mang tính phản ứng (reactive value). Điểm mạnh nhất của Signal là khi giá trị của nó thay đổi, nó sẽ **tự động chỉ cập nhật chính xác khu vực UI** đang sử dụng giá trị đó (surgical updates), giúp tối ưu hóa hiệu năng một cách triệt để.

*(Minh họa: Trong ứng dụng đếm Counter, nút "Increment Normal" sẽ kích hoạt Change Detection quét toàn bộ trang, còn "Increment Signal" chỉ cập nhật duy nhất dòng text hiển thị số đếm của nó).*

### Q2. Cách triển khai (Implement) Signals trong Angular như thế nào?

**Trả lời:**
Để sử dụng Signals, chúng ta thực hiện 3 bước cơ bản: Khởi tạo, Đọc giá trị và Cập nhật giá trị.

**1. Khởi tạo Signal:**
`signal()` là một hàm trong Angular dùng để tạo ra một giá trị phản ứng (Reactive value). Hàm này nhận vào một giá trị khởi tạo (initial value) và trả về một đối tượng Signal.

```typescript
import { Component, signal } from '@angular/core';

@Component({
  // ...
})
export class MyComponent {
  // Creating Signal
  count = signal(0); 
}
```

**2. Đọc giá trị của Signal:**
Để lấy giá trị hiện tại của Signal (cả trong file `.ts` lẫn trên giao diện `.html`), chúng ta bắt buộc phải gọi nó như một hàm (thêm dấu ngoặc đơn `()`).

```html
<!-- withsignal.html -->
<h3>Signal Example - Counter</h3>

<!-- Reading signal -->
<p>Count: {{ count() }}</p>
<button (click)="increment()">Increment</button>
```

**3. Cập nhật giá trị của Signal:**
Signals cung cấp sẵn các phương thức để thay đổi trạng thái của nó một cách an toàn:
- **`set()`**: Dùng để gán một giá trị mới hoàn toàn.
- **`update()`** *(Bổ sung)*: Dùng để tính toán giá trị mới dựa trên giá trị hiện tại.

```typescript
export class MyComponent {
  count = signal(0);
  
  increment() {
    // Cách 1: Sử dụng set() - Cập nhật giá trị
    this.count.set(this.count() + 1);

    // Cách 2: Sử dụng update() - Khuyên dùng khi tính toán phụ thuộc vào giá trị cũ
    // this.count.update(currentValue => currentValue + 1);
  }
}
```

> **Tóm lại:** Signal là một giá trị reactive, nó theo dõi xem ai đang "đọc" nó. Khi bạn gọi `set()` hoặc `update()`, Signal sẽ thông báo chính xác cho phần UI đó (ở đây là thẻ `<p>`) tự động render lại, bỏ qua hoàn toàn các nơi khác không liên quan.
