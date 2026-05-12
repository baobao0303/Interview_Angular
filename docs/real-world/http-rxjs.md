# HTTP Client & RxJS

### Q1. What is RxJS and what are Observables?

**Trả lời:**
❖ **RxJS (Reactive Extensions for JavaScript)** là một thư viện hỗ trợ lập trình bất đồng bộ (asynchronous programming) bằng cách sử dụng các luồng dữ liệu (data streams) có thể quan sát được (Observables).
❖ **Observables** là các đối tượng phát ra (emit) nhiều giá trị theo thời gian. Bạn có thể thiết lập các `subscriptions` (đăng ký) để lắng nghe và xử lý các giá trị đó mỗi khi có dữ liệu mới.

*Hình ảnh minh họa:* 
Một luồng dữ liệu liên tục phát ra các sự kiện (1, 2, 3...) theo thời gian và các Observer có thể đăng ký để nhận các giá trị này.

---

### Q2. What is a BehaviorSubject?

**Trả lời:**
❖ **BehaviorSubject** là một dạng đặc biệt của Subject trong RxJS. Nó có đặc điểm:
1. Luôn lưu giữ **giá trị hiện tại** (hoặc giá trị khởi tạo ban đầu).
2. Khi có một Subscriber mới đăng ký, nó sẽ ngay lập tức phát ra (emit) giá trị hiện tại đó cho Subscriber.

**Ví dụ:**
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages$ = new BehaviorSubject<string[]>([]);
  private messages: string[] = [];

  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    this.messages = [...this.messages, message];
    this.messages$.next(this.messages); // Phát ra giá trị mới
  }
}
```

---

### Q3. How to use `interval` and `map` in RxJS?

**Trả lời:**
❖ `interval(ms)` là một hàm tạo ra một Observable tự động phát ra một số nguyên tăng dần (0, 1, 2...) sau mỗi khoảng thời gian `ms`.
❖ `map()` là một toán tử (operator) giúp biến đổi dữ liệu nhận được từ luồng trước khi gửi cho Subscriber.

**Ví dụ:**
```typescript
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `...`
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const subscription = interval(1000).pipe(
      map((val) => val * 2)
    ).subscribe({
      next: (val) => console.log(val)
    });
  }
}
```

---

### Q4. How to properly unsubscribe using DestroyRef to prevent memory leaks?

**Trả lời:**
Khi đăng ký một Observable dài hạn (như `interval` hoặc sự kiện DOM), việc đăng ký (subscription) vẫn tiếp tục tồn tại ngay cả khi Component đã bị hủy. Điều này dẫn đến tình trạng **Memory Leak**.

❖ Sử dụng `DestroyRef` (từ Angular 16) là một cách hiện đại để đảm bảo Subscription bị hủy bỏ (unsubscribe) khi Component chết đi, mà không cần phải triển khai `ngOnDestroy`.

**Ví dụ:**
```typescript
import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `...`
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = interval(1000).pipe(
      map((val) => val * 2)
    ).subscribe({
      next: (val) => console.log(val)
    });

    // Dọn dẹp subscription khi Component bị hủy
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
```