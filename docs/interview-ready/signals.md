# Signals trong Angular

### Q1. Signals là gì? Sự khác biệt cốt lõi giữa Signals và Change Detection truyền thống?

**Trả lời:**
Để hiểu rõ giá trị của Signals, trước tiên chúng ta cần nhắc lại về **Change Detection**:
- **Change Detection** là quá trình Angular kiểm tra toàn bộ ứng dụng để phát hiện sự thay đổi dữ liệu, từ đó cập nhật lại giao diện (UI).
- **Nhược điểm:** Cơ chế Change Detection truyền thống (dựa vào Zone.js) sẽ quét và kiểm tra **rất nhiều bindings (ràng buộc dữ liệu)** trên giao diện, kể cả những nơi không hề có sự thay đổi. Điều này có thể gây giảm hiệu năng.

**Ngược lại, Signals ra đời để giải quyết vấn đề trên:**
- **Signal** là một giá trị mang tính phản ứng (reactive value). Điểm mạnh nhất của Signal là khi giá trị của nó thay đổi, nó sẽ **tự động chỉ cập nhật chính xác khu vực UI** đang sử dụng giá trị đó (surgical updates), giúp tối ưu hóa hiệu năng một cách triệt để.

*(Minh họa: Trong ứng dụng đếm Counter, nút "Increment Normal" sẽ kích hoạt Change Detection quét toàn bộ trang, còn "Increment Signal" chỉ cập nhật duy nhất dòng text hiển thị số đếm của nó).*