# Services & Dependency Injection (DI) trong Angular

### Q1. Services trong Angular là gì? Tại sao chúng ta cần sử dụng chúng?
**Trả lời:**
❖ **Service** là một class TypeScript chứa các đoạn code logic nghiệp vụ (business logic) có thể được tái sử dụng (reusable code). Nó giúp chia sẻ dữ liệu hoặc logic giữa nhiều components với nhau thông qua cơ chế Dependency Injection (DI).
❖ Thay vì viết lặp đi lặp lại một logic (như tính lương, gọi API) ở ComponentA, ComponentB, chúng ta gom nó vào một Service chung để các components cùng sử dụng.

---

### Q2. Làm thế nào để tạo một Service trong Angular?
**Trả lời:**
❖ Để tạo một service, chúng ta sử dụng câu lệnh Angular CLI:
`ng generate service service-name` hoặc viết tắt: `ng g s service-name`.

---

### Q3. Làm thế nào để sử dụng một Service trong component MÀ KHÔNG CÓ Dependency Injection?
**Trả lời:**
❖ Nếu không dùng DI, chúng ta phải **khởi tạo thủ công (manually creating)** object của service bên trong component bằng từ khóa `new`.
```typescript
export class SalaryService {
  calculateSalary(base: number, bonus: number) {
    return base + bonus;
  }
}

// Service implemented Without DI
export class EmployeeComponent {
  base = 30000; bonus = 5000;
  finalSalary = 0;
  salaryService: SalaryService;

  constructor() {
    // Manually creating the service object
    this.salaryService = new SalaryService();
    this.finalSalary = this.salaryService.calculateSalary(this.base, this.bonus);
  }
}
```

---

### Q4. Dependency Injection (DI) là gì? Làm thế nào để triển khai nó?
**Trả lời:**
❖ **Dependency Injection (DI)** trong Angular là một mẫu thiết kế (design pattern) trong đó Angular sẽ **tự động cung cấp (inject)** các services hoặc objects cần thiết vào component thay vì chúng ta phải tự tạo bằng tay (bằng chữ `new`).

```typescript
// Service implemented With DI
export class EmployeeComponent {
  base = 30000; bonus = 5000; 
  finalSalary = 0;

  // Angular tự động inject SalaryService
  constructor(private salaryService: SalaryService) {
    this.finalSalary = this.salaryService.calculateSalary(this.base, this.bonus);
  } 
}
```

---

### Q5. Ưu điểm của Dependency Injection là gì? Nhược điểm của việc tạo bằng chữ "new" là gì?
**Trả lời:**
❖ **Ưu điểm của Dependency Injection:**
1. Angular cung cấp tính năng quản lý object tập trung (**singleton** - 1 instance duy nhất).
2. Sự liên kết lỏng lẻo (**Loose coupling**) giữa các component và services.
3. Tăng tính linh hoạt - Dễ dàng hơn trong việc test và mock dữ liệu.

❖ **Nhược điểm của dùng "new":** Mã bị liên kết chặt chẽ (tightly coupled), khó bảo trì, khó unit test và tốn bộ nhớ vì mỗi component lại tạo ra một bản sao (instance) mới của service.

---

### Q6. "1 Instance" (Singleton) trong Angular Service nghĩa là gì?
**Trả lời:**
❖ **1 Instance (Singleton)** nghĩa là Angular chỉ tạo ra **duy nhất một bản sao (một object)** của Service đó trong toàn bộ vòng đời của ứng dụng. 
❖ Tất cả các Component yêu cầu Service này (như Component A, Component B) đều sẽ được Angular đưa cho **cùng một object đó**. Điều này cho phép chúng ta chia sẻ dữ liệu (ví dụ: giỏ hàng, thông tin user) một cách đồng nhất giữa nhiều trang khác nhau mà dữ liệu không bị làm mới hay mất đi. Mặc định các service được gắn `@Injectable({ providedIn: 'root' })` đều là Singleton.

---

### Q7. Các cách cấu hình Providers trong Angular (useClass, useValue, useExisting, useFactory)?
**Trả lời:**
Bảng dưới đây giải thích các loại Provider dùng để chỉ định cách Angular tạo ra hoặc cung cấp dependency:

| Provider Type | Mục đích | Cách sử dụng / Ví dụ |
| :--- | :--- | :--- |
| **`useClass`** | Mặc định. Khi yêu cầu một Token, tạo ra một instance từ một **Class** cụ thể. | Thường dùng để thay thế (override) một service bằng một class giả (mock class) khi test.<br>`{ provide: Logger, useClass: BetterLogger }` |
| **`useValue`** | Cung cấp một **giá trị cố định** (chuỗi, số, object có sẵn) thay vì khởi tạo một class. | Rất tốt để cung cấp các cấu hình (Config, API URL).<br>`{ provide: API_URL, useValue: 'https://api.com' }` |
| **`useExisting`** | Trỏ một Token này sang một **Token khác đã tồn tại**. Không tạo ra instance mới (Bí danh - Alias). | Dùng khi muốn 2 token khác nhau cùng trỏ về 1 instance duy nhất.<br>`{ provide: OldLogger, useExisting: NewLogger }` |
| **`useFactory`** | Sử dụng một **hàm (function)** để quyết định động xem sẽ trả về dependency nào lúc chạy (runtime). | Dùng khi quá trình tạo Service cần logic phức tạp (có điều kiện if-else) hoặc cần kết hợp nhiều service khác.<br>`{ provide: Config, useFactory: configFactory }` |

---

## Mở rộng: Resolution Modifiers (Các bộ điều chỉnh phân giải)

Trong cơ chế Dependency Injection, khi Angular cố gắng tiêm (inject) một Service vào Component, nó sẽ tìm kiếm Service đó trong cây Injector (Injector Tree) từ Component hiện tại (Local) leo ngược dần lên tận Root. Tuy nhiên, chúng ta có thể can thiệp và kiểm soát chính xác phạm vi tìm kiếm này thông qua 4 Decorator (Resolution Modifiers).

### Q8. Kể tên và giải thích 4 Resolution Modifiers trong Angular DI?

**Trả lời:**
Có 4 modifiers chính điều khiển cách Angular tìm kiếm một dependency (như trong hình ảnh bạn đề cập):

**1. `@Optional()` - "Không có cũng không sao"**
- **Ý nghĩa:** Đánh dấu một dependency là không bắt buộc.
- **Cách hoạt động:** Mặc định, nếu Angular không tìm thấy Service được yêu cầu trong toàn bộ Injector Tree, nó sẽ ném ra lỗi (NullInjectorError) làm sập ứng dụng. Khi dùng `@Optional()`, nếu không tìm thấy Service, Angular sẽ không báo lỗi mà chỉ trả về giá trị `null`.
- **Ví dụ:** `constructor(@Optional() private logger: LoggerService) {}`

**2. `@Self()` - "Chỉ tìm ở nhà mình"**
- **Ý nghĩa:** Chỉ giới hạn việc tìm kiếm Service ở **chính Injector của Component hiện tại**.
- **Cách hoạt động:** Angular sẽ không bao giờ leo lên Component cha (Parent) hay Root để tìm. Yêu cầu Service đó phải được khai báo ngay trong mảng `providers: []` của Component đang gọi. Nếu không có, nó sẽ ném lỗi.
- **Ví dụ:** `constructor(@Self() private dataService: DataService) {}`

**3. `@SkipSelf()` - "Bỏ qua nhà mình, lên nhà bố mẹ tìm"**
- **Ý nghĩa:** Bỏ qua Component hiện tại, bắt đầu tìm kiếm từ **Component cha trở lên**.
- **Cách hoạt động:** Trái ngược với `@Self()`. Angular sẽ nhảy qua Injector của Component hiện tại và bắt đầu quá trình tìm kiếm từ Injector của Parent Component. Rất hữu ích khi Component con muốn dùng chung instance (phiên bản) Service của Component cha thay vì lỡ sử dụng một provider cục bộ.
- **Ví dụ:** `constructor(@SkipSelf() private themeService: ThemeService) {}`

**4. `@Host()` - "Tìm tối đa tới Host Component"**
- **Ý nghĩa:** Quá trình tìm kiếm sẽ leo lên trên nhưng **dừng lại tại Host Element** của Component hiện tại.
- **Cách hoạt động:** Nó leo lên dọc theo Injector Tree tương tự cách mặc định, nhưng điểm kết thúc của nó là "Host" (thường là Component bao bọc/sử dụng Component này). Nó sẽ không được phép leo xa hơn (lên tận Root). Nếu chạm tới Host mà chưa tìm thấy, nó sẽ báo lỗi.
- **Ví dụ:** `constructor(@Host() private parentService: ParentService) {}`

---

### Q9. Có thể kết hợp các Modifiers này với nhau không?
**Trả lời:** Hoàn toàn có thể. Việc kết hợp phổ biến nhất là dùng chung với `@Optional()` để tránh lỗi sập ứng dụng.

**Ví dụ thực tế:**
```typescript
constructor(@Optional() @Self() private localService: MyService) {}
```
> **Ý nghĩa:** "Hãy tìm MyService ở chính Component này (không lên cha tìm). Nếu không có thì cũng không sao, hãy gán nó bằng `null` chứ đừng báo lỗi."

---

### Q10. Làm thế nào để Inject một dependency không phải là Class (ví dụ: Interface, String, Object, Function) trong TypeScript?

**Trả lời:**
Trong Angular, chúng ta thường dùng chính **Class** làm token (định danh) để inject (ví dụ: `constructor(private auth: AuthService)`). Tuy nhiên, **Interface** trong TypeScript lại biến mất (compile away) khi biên dịch sang JavaScript, do đó không thể dùng Interface (hoặc String, Object thuần) làm Token để Angular nhận diện lúc runtime (khi ứng dụng chạy).

Để giải quyết vấn đề này, Angular cung cấp **`InjectionToken`**.

**Cách triển khai (Implement):**

**Bước 1: Tạo một InjectionToken**
Định nghĩa một token với kiểu dữ liệu mong muốn (ví dụ: Interface `AppConfig`).

```typescript
import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  retryCount: number;
}

// Tạo Token để đại diện cho Interface AppConfig
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
```

**Bước 2: Cung cấp (Provide) giá trị cho Token**
Sử dụng `useValue` (hoặc `useFactory`) để gán giá trị thực tế cho token đó trong phần `providers` của Component hoặc Module (hoặc `app.config.ts`).

```typescript
import { ApplicationConfig } from '@angular/core';
import { APP_CONFIG } from './app-config.token';

const myAppConfig = {
  apiUrl: 'https://api.example.com',
  retryCount: 3
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_CONFIG, useValue: myAppConfig }
  ]
};
```

**Bước 3: Inject vào Component/Service**
Sử dụng hàm `inject()` (Angular 14+) hoặc decorator `@Inject()` (truyền thống) để lấy giá trị ra sử dụng.

```typescript
import { Component, Inject, inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app-config.token';

@Component({
  // ...
})
export class MyComponent {
  // Cách 1: Dùng hàm inject() (Khuyên dùng từ Angular 14+ / Standalone)
  private config = inject(APP_CONFIG);

  // Cách 2: Dùng decorator @Inject() trong constructor (Cách truyền thống)
  constructor(@Inject(APP_CONFIG) private configOld: AppConfig) {
    console.log(this.config.apiUrl); // Output: https://api.example.com
  }
}
```