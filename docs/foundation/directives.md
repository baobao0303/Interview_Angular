# Directives & Pipes trong Angular

Angular cung cấp hai công cụ cực kỳ mạnh mẽ để thao tác và định dạng dữ liệu trực tiếp trên Template (HTML) đó là **Directives** và **Pipes**.

---

## 1. Directives (Chỉ thị)

**Directive** là các class mang lại thêm chức năng, hành vi hoặc thay đổi cấu trúc của các phần tử DOM trên giao diện.
Angular chia Directive thành 3 loại chính:

### a. Component Directives
Thực chất, Component chính là một Directive đặc biệt vì nó đi kèm với một Template (HTML). (Sử dụng `@Component`).

### b. Attribute Directives
Thay đổi giao diện hoặc hành vi (behavior) của một phần tử DOM, component, hoặc directive khác, nhưng **không thay đổi cấu trúc của DOM**.

Các Attribute Directives phổ biến được tích hợp sẵn:
- **`[ngClass]`**: Thêm/xóa các class CSS một cách động (dynamic) dựa vào điều kiện.
  ```html
  <div [ngClass]="{'active': isActive, 'error': hasError}">Trạng thái</div>
  ```
- **`[ngStyle]`**: Cập nhật các inline-style dựa trên biểu thức.
  ```html
  <div [ngStyle]="{'color': isActive ? 'green' : 'red'}">Đoạn text này đổi màu</div>
  ```

### c. Structural Directives
Làm thay đổi **cấu trúc** của DOM bằng cách thêm, xóa, hoặc thao tác trực tiếp lên các phần tử DOM. Đặc điểm nhận diện của chúng là thường có dấu sao `*` ở đằng trước.

- **`*ngIf`**: Hiển thị hoặc ẩn phần tử tùy thuộc vào điều kiện đúng/sai.
  ```html
  <p *ngIf="isLoggedIn">Chào mừng bạn đã quay lại!</p>
  ```
- **`*ngFor`**: Dùng để lặp qua một mảng dữ liệu và render ra các phần tử tương ứng.
  ```html
  <ul>
    <li *ngFor="let item of items; let i = index">{{ i + 1 }}. {{ item.name }}</li>
  </ul>
  ```

> 💡 **Lưu ý (Angular 17+ Control Flow):**
> Kể từ phiên bản 17, Angular giới thiệu cú pháp **Built-in Control Flow** mới (`@if`, `@for`, `@switch`) mạnh mẽ, trực quan và hiệu năng tốt hơn nhiều so với Structural Directives cũ:
> ```html
> @if (isLoggedIn) {
>   <p>Chào mừng bạn đã quay lại!</p>
> } @else {
>   <p>Vui lòng đăng nhập!</p>
> }
> 
> <ul>
>   @for (item of items; track item.id) {
>     <li>{{ item.name }}</li>
>   }
> </ul>
> ```

---

## 2. Pipes (Đường ống dữ liệu)

**Pipe** là một công cụ giúp bạn "biến đổi" (transform) dữ liệu trước khi hiển thị ra giao diện người dùng, mà không làm thay đổi giá trị thực sự của dữ liệu đó trong Class.

Sử dụng toán tử dấu sổ dọc `|` để áp dụng một Pipe.

### a. Các Built-in Pipes phổ biến
Angular cung cấp sẵn rất nhiều Pipes hữu ích:

1. **`uppercase` / `lowercase`**: Chuyển đổi chữ hoa / chữ thường.
   ```html
   <p>{{ 'Angular' | uppercase }}</p> <!-- Hiển thị: ANGULAR -->
   ```
2. **`date`**: Định dạng ngày tháng năm.
   ```html
   <p>{{ today | date:'dd/MM/yyyy' }}</p> <!-- Hiển thị: 25/12/2026 -->
   ```
3. **`currency`**: Định dạng tiền tệ.
   ```html
   <p>{{ 1000 | currency:'VND' }}</p> <!-- Hiển thị: 1,000.00 ₫ -->
   ```
4. **`json`**: Thường dùng để debug object ra ngoài giao diện.
   ```html
   <pre>{{ userObject | json }}</pre>
   ```
5. **`async`**: Cực kỳ quan trọng trong RxJS. Tự động `subscribe` một Observable/Promise, lấy dữ liệu ra hiển thị và tự động `unsubscribe` khi Component bị hủy để chống memory leak.
   ```html
   <!-- users$ là một Observable -->
   <ul>
     <li *ngFor="let user of users$ | async">{{ user.name }}</li>
   </ul>
   ```

### b. Custom Pipes (Tự tạo Pipe riêng)
Bạn có thể tự tạo Pipe để thực hiện logic transform riêng bằng cách dùng decorator `@Pipe` và implement interface `PipeTransform`.

Ví dụ: Tạo Pipe cắt ngắn chuỗi văn bản quá dài.
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
```
Cách sử dụng trên HTML:
```html
<p>{{ 'Đây là một đoạn văn bản rất dài cần được cắt ngắn đi' | truncate:15 }}</p>
<!-- Kết quả: Đây là một đoạn... -->
```