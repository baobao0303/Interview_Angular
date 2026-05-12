# 🚀 Interview_Angular

Chào mừng bạn đến với **Interview_Angular**! Đây là một kho lưu trữ (repository) toàn diện được thiết kế đặc biệt nhằm giúp các lập trình viên ôn tập, củng cố kiến thức và chuẩn bị tốt nhất cho các buổi phỏng vấn kỹ thuật về **Angular**. 

Dự án này không chỉ cung cấp lý thuyết suông mà còn đi kèm với các **đoạn code thực hành trực quan** (Real-world Demos) và bộ tài liệu được cấu trúc chuyên nghiệp bằng **VitePress**.

---

## 🌟 Tính năng nổi bật

### 1. 📖 Bộ tài liệu phỏng vấn (VitePress Docs)
Toàn bộ lý thuyết và câu hỏi phỏng vấn được biên soạn và trình bày đẹp mắt thông qua VitePress. Bao gồm:
- **Kiến thức nền tảng (Foundation):** Routing & Navigation, Forms (Template-driven & Reactive), HTTP Client & RxJS, Services & Dependency Injection (DI).
- **Kiến thức nâng cao (Interview Ready):** Cơ chế Change Detection (Zone.js vs OnPush), Signals (Tính năng mới nhất của Angular), và Standalone Architecture (Kiến trúc phi Module).

### 2. 💻 Code Demo Thực Tế
Lý thuyết luôn đi đôi với thực hành. Dự án tích hợp sẵn một ứng dụng Angular (phiên bản 18+) demo trực tiếp các khái niệm:
- **RxJS & Signals:** Minh họa sự khác biệt và cách chuyển đổi qua lại giữa Observables (`BehaviorSubject`, `interval`, `map`) và Signals (`toSignal`, `toObservable`).
- **Forms:** Cách triển khai Template-driven form cơ bản và Reactive form nâng cao với custom validators.
- **Dependency Injection & Services:** Demo cách inject service vào service, Hierarchical Injector, và vòng đời của Singleton service.
- **Routing:** Hệ thống điều hướng trang hiện đại sử dụng Standalone Router.

---

## 🛠️ Cài đặt và Chạy dự án

Dự án yêu cầu **Node.js** (khuyến nghị bản LTS mới nhất) và **Angular CLI**.

### 1. Cài đặt các thư viện phụ thuộc
```bash
npm install
```

### 2. Chạy ứng dụng Angular (Demo Code)
Để xem ứng dụng thực tế với các tính năng như Form, RxJS, Routing:
```bash
npm start
# Ứng dụng sẽ chạy tại địa chỉ: http://localhost:4201/
```

### 3. Chạy hệ thống Tài liệu (VitePress)
Để đọc tài liệu ôn tập phỏng vấn:
```bash
npm run docs:dev
# Tài liệu sẽ hiển thị tại địa chỉ: http://localhost:5173/
```

---

## 📂 Cấu trúc thư mục

- `src/app/` - Mã nguồn của ứng dụng Angular Demo (Standalone Components).
  - `form/` - Chứa demo về Reactive và Template-driven forms.
  - `rxjs-demo/` - Chứa demo về Observables và Signals.
  - `tasks/` - Demo về Dependency Injection và Services.
- `docs/` - Chứa toàn bộ nội dung tài liệu Markdown (.md) được render bởi VitePress.
  - `foundation/` - Lý thuyết cơ bản.
  - `interview-ready/` - Kiến thức nâng cao.
  - `public/` - Tài nguyên hình ảnh minh họa cho tài liệu.

---

## 💡 Định hướng
Kho lưu trữ này sẽ liên tục được cập nhật các bộ câu hỏi mới và các tính năng hiện đại nhất của Angular để đảm bảo bạn luôn sẵn sàng đối mặt với bất kỳ câu hỏi khó nào từ nhà tuyển dụng.

*Chúc bạn học tập tốt và vượt qua mọi vòng phỏng vấn! 🎉*
