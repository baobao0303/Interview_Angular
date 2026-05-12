# 🚀 Tổng hợp Câu hỏi Phỏng vấn Frontend (Từ Fresher đến Senior)

Dưới đây là danh sách tổng hợp các câu hỏi phỏng vấn Frontend thường gặp, được phân loại từ cấp độ cơ bản (Junior/Fresher) đến chuyên sâu (Senior). Các câu hỏi này bao quát HTML, CSS, JavaScript, Web Performance và System Design.

---

## 🟢 Cấp độ 1: Junior / Fresher (Cơ bản)
*Ở cấp độ này, nhà tuyển dụng tập trung vào kiến thức nền tảng vững chắc về HTML, CSS và JavaScript.*

### Q1. Sự khác biệt giữa `id` và `class` trong HTML/CSS là gì?
**Trả lời:**
- **`id`**: Là định danh duy nhất cho một phần tử trên trang. Dùng `#id` trong CSS.
- **`class`**: Là định danh có thể tái sử dụng cho nhiều phần tử. Dùng `.class` trong CSS.

### Q2. Box model trong CSS là gì?
**Trả lời:**
Box model mô tả cách các phần tử HTML được hiển thị dưới dạng các hộp hình chữ nhật, bao gồm 4 thành phần (từ trong ra ngoài):
1. **Content**: Nội dung thực tế (văn bản, hình ảnh).
2. **Padding**: Khoảng đệm giữa Content và Border.
3. **Border**: Đường viền bao quanh phần tử.
4. **Margin**: Khoảng cách bên ngoài, đẩy phần tử này cách xa phần tử khác.

### Q3. Phân biệt `inline`, `inline-block`, và `block`?
**Trả lời:**
- **`inline`**: Chỉ chiếm không gian cần thiết, không ngắt dòng. Không thể set `width`/`height` (VD: `<span>`, `<a>`).
- **`inline-block`**: Giống `inline` là không ngắt dòng, nhưng **có thể** set được `width`/`height`.
- **`block`**: Luôn bắt đầu ở dòng mới, chiếm 100% chiều rộng của thẻ cha theo mặc định. Có thể set `width`/`height` (VD: `<div>`, `<p>`).

### Q4. Sự khác biệt giữa `null` và `undefined` trong JavaScript?
**Trả lời:**
- **`undefined`**: Biến đã được khai báo nhưng chưa được gán giá trị (mặc định do hệ thống gán).
- **`null`**: Là một giá trị cố tình được gán bởi lập trình viên để ám chỉ "không có giá trị nào" hoặc "không có đối tượng".

### Q5. So sánh Cookie, sessionStorage và localStorage?
**Trả lời:**
- **Cookie**: Dung lượng nhỏ (~4KB), gửi kèm theo mỗi HTTP request. Thường dùng để lưu phiên đăng nhập (auth tokens).
- **sessionStorage**: Lưu trữ dữ liệu tạm thời cho một tab/phiên làm việc. Dữ liệu mất khi đóng tab trình duyệt.
- **localStorage**: Lưu trữ dữ liệu vĩnh viễn trên trình duyệt client cho đến khi bị xóa thủ công bằng code hoặc xóa lịch sử duyệt web. Dung lượng lớn (~5MB).

---

## 🟡 Cấp độ 2: Middle (Trung cấp)
*Cấp độ Middle yêu cầu hiểu rõ cách trình duyệt hoạt động, xử lý bất đồng bộ và tối ưu hóa UI.*

### Q6. Trình duyệt hiển thị (render) trang web như thế nào? (Critical Rendering Path)
**Trả lời:**
1. Trình duyệt tải xuống HTML và phân tích cú pháp để xây dựng **DOM Tree**.
2. Tải CSS và phân tích cú pháp để xây dựng **CSSOM Tree**.
3. Kết hợp DOM và CSSOM thành **Render Tree**.
4. **Layout (Reflow)**: Tính toán kích thước và vị trí chính xác của từng phần tử.
5. **Paint**: Vẽ các pixel thực tế lên màn hình (Text, color, image, shadows).
6. **Composite**: Gộp các layer lại với nhau (đặc biệt quan trọng khi có animations hoặc z-index).

### Q7. Độ đặc hiệu của CSS (CSS Specificity) hoạt động như thế nào?
**Trả lời:**
Quy tắc ưu tiên (từ cao xuống thấp):
1. `!important` (Ghi đè tất cả).
2. Inline Styles (VD: `style="color: red;"`).
3. ID Selectors (`#header`).
4. Class, Pseudo-classes, Attributes (`.button`, `:hover`, `[type="text"]`).
5. Elements, Pseudo-elements (`div`, `h1`, `::before`).

### Q8. Vòng lặp sự kiện (Event Loop) trong JavaScript hoạt động ra sao?
**Trả lời:**
JS là ngôn ngữ đơn luồng (single-threaded). Nó dùng Event Loop để xử lý bất đồng bộ:
1. **Call Stack**: Thực thi code đồng bộ.
2. **Web APIs**: Trình duyệt xử lý các tác vụ bất đồng bộ (setTimeout, HTTP Request, DOM events).
3. **Task Queue / Microtask Queue**: Khi Web API hoàn thành, callback được đẩy vào Queue (Microtask như Promise có mức ưu tiên cao hơn Macrotask như setTimeout).
4. **Event Loop**: Theo dõi Call Stack, khi Call Stack rỗng, nó sẽ đẩy callback từ Queue lên Call Stack để thực thi.

### Q9. Ủy quyền sự kiện (Event Delegation) là gì?
**Trả lời:**
Thay vì gắn `addEventListener` cho từng phần tử con (VD: 100 thẻ `<li>`), ta gắn một listener duy nhất vào thẻ cha (`<ul>`). Nhờ cơ chế **Event Bubbling** (sự kiện nổi bọt từ con lên cha), thẻ cha có thể bắt được sự kiện và dùng `event.target` để biết chính xác thẻ con nào được click. Giúp tiết kiệm bộ nhớ và dễ dàng quản lý DOM động.

### Q10. Virtual DOM là gì và lợi ích của nó? (React/Vue)
**Trả lời:**
- Virtual DOM là một bản sao nhẹ của DOM thật được lưu trong bộ nhớ (memory).
- Khi trạng thái (state) thay đổi, framework tạo ra một Virtual DOM mới và so sánh (diffing) với Virtual DOM cũ.
- Nó tính toán ra sự khác biệt nhỏ nhất (patches) và chỉ cập nhật đúng phần thay đổi đó lên DOM thật.
- **Lợi ích**: Tránh việc phải render lại toàn bộ trang, tối ưu hiệu suất thao tác DOM (vốn rất chậm).

---

## 🔴 Cấp độ 3: Senior (Chuyên sâu / System Design)
*Ở cấp độ này, ứng viên cần có tầm nhìn về kiến trúc ứng dụng, bảo mật và hiệu suất toàn diện.*

### Q11. Quản lý trạng thái (State Management) trong SPA phức tạp như thế nào?
**Trả lời:**
Khi ứng dụng phình to, việc truyền dữ liệu qua lại giữa các Component bằng Props/Events (Prop Drilling) trở nên bất khả thi. Senior cần hiểu các mô hình:
- **Global Store**: Sử dụng Redux, NgRx hoặc Vuex/Pinia để tạo một kho lưu trữ tập trung.
- **Signals / Reactive State**: Xu hướng mới (như Angular Signals, SolidJS) sử dụng trạng thái phản ứng trực tiếp không cần qua Virtual DOM diffing.
- **Server State vs Client State**: Tách biệt dữ liệu gọi từ API (quản lý bằng React Query/TanStack Query) và dữ liệu UI cục bộ.

### Q12. SSR (Server-Side Rendering) vs CSR (Client-Side Rendering) vs SSG (Static Site Generation)?
**Trả lời:**
- **CSR**: Tải một file HTML rỗng và file JS lớn. JS sẽ chạy và render giao diện. (Tốt cho ứng dụng tương tác cao, kém SEO).
- **SSR**: Server render sẵn HTML đầy đủ và gửi về Client. (Tốt cho SEO, FCP nhanh, nhưng tốn tài nguyên Server).
- **SSG**: Build HTML sẵn tại thời điểm lúc deploy. Trình duyệt chỉ việc tải HTML tĩnh. (Nhanh nhất, cực tốt cho Blog, Docs).

### Q13. Web Vitals (Core Web Vitals) là gì? Làm sao để cải thiện?
**Trả lời:**
Bộ 3 chỉ số quan trọng nhất của Google đo lường UX:
1. **LCP (Largest Contentful Paint)**: Thời gian tải nội dung lớn nhất. Tối ưu: Nén hình ảnh, dùng WebP, Preload ảnh LCP, SSR.
2. **FID (First Input Delay) / INP (Interaction to Next Paint)**: Độ trễ khi người dùng tương tác. Tối ưu: Dùng Web Workers, chia nhỏ file JS (Code Splitting), Tree Shaking để giảm gánh nặng Main Thread.
3. **CLS (Cumulative Layout Shift)**: Mức độ giật/nhảy nội dung. Tối ưu: Set thuộc tính `width`/`height` cố định cho ảnh/video, không chèn nội dung động lên trên nội dung đã render.

### Q14. Chính sách bảo mật nội dung (CSP) & Chống XSS?
**Trả lời:**
- **CSP (Content Security Policy)**: Là một HTTP Header giúp ngăn chặn Cross-Site Scripting (XSS). Nó quy định trình duyệt chỉ được phép tải scripts/images từ các domain được cấp phép (whitelist).
- Để chống XSS, Senior luôn phải "sanitize" (làm sạch) dữ liệu đầu vào của người dùng trước khi innerHTML, sử dụng các framework hiện đại (React/Angular) vì chúng mặc định escape data.

### Q15. Kiến trúc Micro-frontends là gì? Khi nào nên áp dụng?
**Trả lời:**
- **Khái niệm**: Tương tự Micro-services ở backend, Micro-frontends chia một Frontend App khổng lồ thành các ứng dụng nhỏ hơn (Ví dụ: Team A làm phần Giỏ hàng bằng React, Team B làm phần Thanh toán bằng Angular). Chúng được ghép lại thành một trang thống nhất lúc runtime thông qua Webpack Module Federation hoặc Iframes.
- **Khi nào áp dụng**: Dự án cực kỳ lớn (Enterprise), nhiều teams làm việc song song, muốn triển khai (deploy) các module một cách độc lập mà không ảnh hưởng toàn hệ thống.
