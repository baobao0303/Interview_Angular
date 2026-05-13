# Components & Templates trong Angular

Component là "trái tim" của mọi ứng dụng Angular. Một ứng dụng Angular thực chất là một cây (tree) bao gồm nhiều Component lồng ghép vào nhau.

## 1. Component là gì?

Component là một khối code độc lập chịu trách nhiệm quản lý một phần giao diện người dùng (UI). Mỗi Component bao gồm 3 thành phần chính:
1. **Template (HTML)**: Định nghĩa cấu trúc giao diện.
2. **Class (TypeScript)**: Chứa logic xử lý, dữ liệu và các hành vi (behaviors).
3. **Styles (CSS/SCSS)**: Định nghĩa giao diện thẩm mỹ cho template đó.

Để Angular biết một class TypeScript là một Component, chúng ta sử dụng decorator `@Component`.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello', // Tên thẻ HTML custom: <app-hello></app-hello>
  standalone: true,      // Đánh dấu đây là Standalone Component (Angular 14+)
  template: `<h1>Xin chào, {{ name }}!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class HelloComponent {
  name: string = 'Angular';
}
```

---

## 2. Các cơ chế Data Binding (Ràng buộc dữ liệu)

Data Binding là cơ chế giúp đồng bộ hóa dữ liệu giữa **Class (TypeScript)** và **Template (HTML)**.

### a. Interpolation (Nội suy)
Sử dụng cặp ngoặc nhọn `{{ }}` để hiển thị dữ liệu từ class ra ngoài giao diện.
```html
<p>Tên người dùng: {{ username }}</p>
<p>Kết quả tính toán: {{ 1 + 1 }}</p>
```

### b. Property Binding (Ràng buộc thuộc tính)
Sử dụng cặp ngoặc vuông `[ ]` để truyền giá trị từ class vào thuộc tính của thẻ HTML.
```html
<img [src]="imageUrl" [alt]="imageDescription">
<button [disabled]="isFormInvalid">Submit</button>
```

### c. Event Binding (Ràng buộc sự kiện)
Sử dụng cặp ngoặc tròn `( )` để lắng nghe các sự kiện từ giao diện (như click, input) và gọi hàm xử lý trong class.
```html
<button (click)="onSaveData()">Lưu dữ liệu</button>
<input (keyup.enter)="onEnterPressed()">
```

### d. Two-way Data Binding (Ràng buộc 2 chiều)
Sử dụng cú pháp "chuối trong hộp" `[( )]` để vừa hiển thị dữ liệu vừa cập nhật dữ liệu khi người dùng thay đổi. (Thường dùng với forms).
```html
<!-- Yêu cầu phải import FormsModule -->
<input [(ngModel)]="username" placeholder="Nhập tên của bạn">
<p>Xin chào: {{ username }}</p>
```

---

## 3. Giao tiếp giữa các Component (Component Communication)

Trong một cây Component, các Component cha - con cần truyền dữ liệu cho nhau.

### a. Từ Cha xuống Con (`@Input`)
Component con sử dụng `@Input()` để nhận dữ liệu từ Component cha.
```typescript
// child.component.ts
export class ChildComponent {
  @Input() message: string = '';
}
```
```html
<!-- parent.component.html -->
<app-child [message]="'Dữ liệu từ cha truyền xuống!'"></app-child>
```

### b. Từ Con lên Cha (`@Output` và `EventEmitter`)
Component con sử dụng `@Output()` kết hợp `EventEmitter` để phát (emit) một sự kiện kèm theo dữ liệu lên cho Component cha xử lý.
```typescript
// child.component.ts
export class ChildComponent {
  @Output() dataChanged = new EventEmitter<string>();

  sendDataToParent() {
    this.dataChanged.emit('Dữ liệu từ con gửi lên!');
  }
}
```
```html
<!-- parent.component.html -->
<app-child (dataChanged)="handleData($event)"></app-child>
```

---

## 4. Lifecycle Hooks (Vòng đời của Component)

Mỗi Component có một "vòng đời" từ khi được tạo ra cho đến khi bị hủy bỏ. Bạn có thể can thiệp vào các thời điểm này thông qua các interface:

1. **`ngOnInit()`**: Chạy 1 lần duy nhất ngay sau khi Angular khởi tạo Component và bind xong các thuộc tính `@Input`. Thường dùng để gọi API lấy dữ liệu khởi tạo.
2. **`ngOnChanges()`**: Chạy khi giá trị của các thuộc tính `@Input` thay đổi.
3. **`ngAfterViewInit()`**: Chạy 1 lần khi View (và View của component con) đã được khởi tạo hoàn toàn. Thường dùng để tương tác trực tiếp với DOM.
4. **`ngOnDestroy()`**: Chạy 1 lần ngay trước khi Component bị hủy. Thường dùng để dọn dẹp bộ nhớ (unsubscribe Observables, xóa event listeners).

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

export class ExampleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Component vừa được khởi tạo!');
  }

  ngOnDestroy() {
    console.log('Component chuẩn bị bị hủy!');
  }
}
```