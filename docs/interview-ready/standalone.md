# Standalone Architecture

### Q1. What is Standalone Architecture? Difference btw modular and standalone architecture?

**Trả lời:**
- **Standalone Architecture (Kiến trúc độc lập):** Là kiến trúc trong Angular cho phép các components (cũng như directives, pipes) có thể hoạt động độc lập và tự quản lý các dependencies của riêng nó, mà không cần phải khai báo bên trong một `NgModule`.

- **Sự khác biệt so với Module-Based Architecture:**
  - **Module-Based:** Ứng dụng được cấu trúc xoay quanh các modules (`NgModule`). Các component không thể đứng một mình mà bắt buộc phải được khai báo (declare) và quản lý thông qua một module nào đó. Bạn không thể sử dụng component một cách trực tiếp nếu chưa import module chứa nó.
  
    ![Module base architecture](./images/Module%20base%20architecture.png)

  - **Standalone:** Loại bỏ sự phụ thuộc vào `NgModule` (giảm boilerplate code). Component có thể tự đứng vững, tự import trực tiếp những gì nó cần (các component khác, pipes, directives, services), giúp cấu trúc dự án đơn giản, nhẹ nhàng và dễ tiếp cận hơn.

    ![Standalone Architecture](./images/Standalone%20Architecture.png)

### Q2. Những ưu điểm (Advantages) của Standalone Architecture là gì?

**Trả lời:**
1. **Less boilerplate (Giảm thiểu mã thừa):** Không còn cần phải viết các file cấu hình `NgModule` dài dòng phức tạp.
2. **Simpler structure (Cấu trúc đơn giản hơn):** Không cần tạo thêm file module phụ trợ, dự án trở nên rất gọn gàng.
3. **Faster development (Phát triển nhanh hơn):** Viết code ít hơn, tập trung vào logic component thay vì cấu hình, giúp tăng tốc quá trình làm việc.
