# Standalone Architecture

### Q1. What is Standalone Architecture? Difference btw modular and standalone architecture?

**Trả lời:**
- **Standalone Architecture (Kiến trúc độc lập):** Là kiến trúc trong Angular cho phép các components (cũng như directives, pipes) có thể hoạt động độc lập và tự quản lý các dependencies của riêng nó, mà không cần phải khai báo bên trong một `NgModule`.

- **Sự khác biệt so với Module-Based Architecture:**
  - **Module-Based:** Ứng dụng được cấu trúc xoay quanh các modules (`NgModule`). Các component không thể đứng một mình mà bắt buộc phải được khai báo (declare) và quản lý thông qua một module nào đó. Bạn không thể sử dụng component một cách trực tiếp nếu chưa import module chứa nó.
  - **Standalone:** Loại bỏ sự phụ thuộc vào `NgModule` (giảm boilerplate code). Component có thể tự đứng vững, tự import trực tiếp những gì nó cần (các component khác, pipes, directives, services), giúp cấu trúc dự án đơn giản, nhẹ nhàng và dễ tiếp cận hơn.
