# Interview_Angular

Dự án này là phần code example về "Angular Services Deep Dive" - Tìm hiểu sâu về Services trong Angular (cách inject service vào service).

---

## 📚 Những kiến thức đã học được từ dự án này

Dự án này tập trung vào việc tìm hiểu sâu về **Services** và **Dependency Injection (DI)** trong Angular. Dưới đây là các khái niệm chính đã được áp dụng:

### 1. Hiểu về Dependency Injection (DI)
- Cách Angular tạo và quản lý các instance của service (thông qua DI Container).
- Sử dụng DI để cung cấp data và logic cho các components một cách tập trung, giúp giảm sự phụ thuộc trực tiếp (loose coupling).

### 2. Các cấp độ cung cấp Service (Hierarchical Injector)
- **`@Injectable({ providedIn: 'root' })`**: Khai báo service ở mức root. Angular sẽ tạo một single instance dùng chung cho toàn bộ ứng dụng (Singleton).
- **Component level (`providers: [...]`)**: Cung cấp service ở mức component. Mỗi khi component được khởi tạo, một instance mới của service sẽ được tạo ra, và các child components của nó sẽ dùng chung instance này. Các components khác nằm ngoài cây nhánh này sẽ có instance riêng biệt.

### 3. Inject Service vào một Service khác
- Tình huống: Để một service (ví dụ: `TasksService`) có thể gọi một service khác (ví dụ: `LoggingService`), ta phải inject nó.
- **Bắt buộc**: Service nhận (nơi inject service khác vào) phải được gắn decorator `@Injectable()` để Angular biết mà xử lý DI.
- Cách inject thông qua `constructor(private loggingService: LoggingService)`.

### 4. Sử dụng hàm `inject()` (Angular 14+)
- Là cách tiếp cận mới và hiện đại, thay thế cho `constructor injection`.
- Cú pháp: `private loggingService = inject(LoggingService);`
- **Lợi ích**: Code gọn gàng, dễ sử dụng khi kế thừa class hoặc dùng trong các hàm (functional guards, interceptors).

### 5. Quản lý State cơ bản với Service
- Lưu trữ trạng thái (state) và dữ liệu (như mảng tasks) ở một nơi duy nhất là service.
- Dễ dàng chia sẻ và cập nhật state giữa nhiều component độc lập nhau mà không cần truyền Input/Output phức tạp.
