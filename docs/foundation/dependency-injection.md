# Dependency Injection (DI) trong Angular

## Mở rộng: Resolution Modifiers (Các bộ điều chỉnh phân giải)

Trong cơ chế Dependency Injection, khi Angular cố gắng tiêm (inject) một Service vào Component, nó sẽ tìm kiếm Service đó trong cây Injector (Injector Tree) từ Component hiện tại (Local) leo ngược dần lên tận Root. Tuy nhiên, chúng ta có thể can thiệp và kiểm soát chính xác phạm vi tìm kiếm này thông qua 4 Decorator (Resolution Modifiers).

### Q1. Kể tên và giải thích 4 Resolution Modifiers trong Angular DI?

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

### Q2. Có thể kết hợp các Modifiers này với nhau không?
**Trả lời:** Hoàn toàn có thể. Việc kết hợp phổ biến nhất là dùng chung với `@Optional()` để tránh lỗi sập ứng dụng.

**Ví dụ thực tế:**
```typescript
constructor(@Optional() @Self() private localService: MyService) {}
```
> **Ý nghĩa:** "Hãy tìm MyService ở chính Component này (không lên cha tìm). Nếu không có thì cũng không sao, hãy gán nó bằng `null` chứ đừng báo lỗi."

---

### Q3. Làm thế nào để Inject một dependency không phải là Class (ví dụ: Interface, String, Object, Function) trong TypeScript?

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