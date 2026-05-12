# Interview_Angular

Dự án này là phần code example về "Angular Services Deep Dive" - Tìm hiểu sâu về Services trong Angular (cách inject service vào service).

---

## 📚 Những kiến thức đã học được từ dự án này

Dự án này tập trung vào việc tìm hiểu sâu về **Services** và **Dependency Injection (DI)** trong Angular. Dưới đây là các khái niệm chính, lợi ích và cách áp dụng:

### 1. Hiểu về Dependency Injection (DI)
- **Khái niệm**: Là cơ chế Angular dùng để tạo và quản lý các instance của service (thông qua DI Container), sau đó "tiêm" (inject) chúng vào các component cần dùng.
- **Lợi ích**:
  - Tách biệt logic xử lý (business logic) ra khỏi component, giúp component chỉ tập trung vào việc hiển thị UI.
  - Tăng khả năng tái sử dụng code và dễ dàng viết unit test.
  - Giảm sự phụ thuộc trực tiếp (loose coupling) giữa các thành phần.
- **Cách sử dụng**:
  Tạo service và inject vào constructor của component:
  ```typescript
  constructor(private myService: MyService) {}
  ```

### 2. Các cấp độ cung cấp Service (Hierarchical Injector)
- **Khái niệm**: Xác định phạm vi ảnh hưởng và tuổi thọ (lifecycle) của một service instance.
- **Lợi ích**: Cho phép bạn kiểm soát việc chia sẻ dữ liệu chung (Singleton) hoặc giới hạn dữ liệu riêng biệt cho từng nhánh component cụ thể.
- **Cách sử dụng**:
  - **Mức Root (Toàn cục - Singleton)**:
    ```typescript
    @Injectable({ providedIn: 'root' })
    export class MyService { }
    ```
  - **Mức Component (Instance độc lập)**:
    ```typescript
    @Component({
      selector: 'app-my-component',
      providers: [MyService] // Tạo instance mới riêng cho component này và các component con
    })
    ```

### 3. Inject Service vào một Service khác
- **Khái niệm**: Khi một service cần sử dụng chức năng của một service khác (VD: `TasksService` cần gọi `LoggingService` để ghi log).
- **Lợi ích**: Khuyến khích việc chia nhỏ các service theo từng chức năng (Single Responsibility Principle) thay vì viết một service quá lớn.
- **Cách sử dụng**:
  - **Bắt buộc**: Service nhận (nơi inject) phải có decorator `@Injectable()`.
  ```typescript
  @Injectable({ providedIn: 'root' })
  export class TasksService {
    constructor(private loggingService: LoggingService) {}
    
    addTask() {
      this.loggingService.log('Task added!');
    }
  }
  ```

### 4. Sử dụng hàm `inject()` (Angular 14+)
- **Khái niệm**: Là cách tiếp cận DI mới không cần thông qua constructor.
- **Lợi ích**:
  - Code gọn gàng, dễ đọc hơn.
  - Vô cùng hữu ích khi áp dụng kế thừa class (không cần gọi `super(...)` phức tạp).
  - Dễ dàng sử dụng trong các hàm ngoài class (như functional guards, interceptors).
- **Cách sử dụng**:
  ```typescript
  import { inject } from '@angular/core';

  export class MyComponent {
    private myService = inject(MyService); // Sử dụng trực tiếp như property
  }
  ```

### 5. Quản lý State cơ bản với Service
- **Khái niệm**: Lưu trữ trạng thái (state) và dữ liệu (như danh sách mảng tasks) ở một nơi duy nhất là service.
- **Lợi ích**:
  - Dễ dàng chia sẻ và đồng bộ dữ liệu giữa nhiều component không có quan hệ cha - con.
  - Tránh được tình trạng "Prop Drilling" (phải truyền `@Input()` và `@Output()` qua quá nhiều tầng component trung gian).
- **Cách sử dụng**:
  Lưu trữ dữ liệu trong service và cung cấp các hàm thao tác:
  ```typescript
  @Injectable({ providedIn: 'root' })
  export class TasksService {
    private tasks = []; // Lưu state

    getTasks() { return this.tasks; }
    addTask(task) { this.tasks.push(task); }
  }
  ```
