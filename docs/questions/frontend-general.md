# 🚀 Tổng hợp Câu hỏi Phỏng vấn Frontend (Từ Fresher đến Senior)

Dưới đây là danh sách tổng hợp các câu hỏi phỏng vấn Frontend thường gặp, được phân loại từ cấp độ cơ bản (Junior/Fresher) đến chuyên sâu (Senior). Các câu hỏi này bao quát HTML, CSS, JavaScript, Web Performance và System Design, bao gồm cả những câu hỏi hóc búa hay gặp trên thực tế.

---

## 🟢 Cấp độ 1: Junior / Fresher (Cơ bản)
*Ở cấp độ này, nhà tuyển dụng tập trung vào kiến thức nền tảng vững chắc về HTML, CSS và JavaScript Core.*

### Q1. Sự khác biệt giữa `id` và `class` trong HTML/CSS là gì?
**Trả lời:**
- **`id`**: Là định danh duy nhất cho một phần tử trên trang. Dùng `#id` trong CSS.
- **`class`**: Là định danh có thể tái sử dụng cho nhiều phần tử. Dùng `.class` trong CSS.

### Q2. Box model trong CSS là gì?
**Trả lời:**
Box model mô tả cách các phần tử HTML được hiển thị dưới dạng các hộp hình chữ nhật, bao gồm 4 thành phần (từ trong ra ngoài): `Content` -> `Padding` -> `Border` -> `Margin`.

### Q3. Phân biệt `inline`, `inline-block`, và `block`?
**Trả lời:**
- **`inline`**: Không ngắt dòng, không set được `width`/`height` (VD: `<span>`).
- **`inline-block`**: Không ngắt dòng, **có thể** set được `width`/`height`.
- **`block`**: Bắt đầu ở dòng mới, chiếm 100% width thẻ cha (VD: `<div>`).

### Q4. Sự khác biệt giữa `null` và `undefined` trong JavaScript?
**Trả lời:**
- **`undefined`**: Biến đã được khai báo nhưng chưa được gán giá trị (JS tự động gán).
- **`null`**: Là giá trị cố tình được gán bởi lập trình viên để ám chỉ "không có giá trị".

### Q5. So sánh `==` và `===` trong JavaScript?
**Trả lời:**
- **`==`**: Toán tử so sánh bằng lỏng lẻo. Tự động ép kiểu (type coercion) hai vế về cùng một kiểu trước khi so sánh. (VD: `1 == '1'` -> `true`).
- **`===`**: Toán tử so sánh bằng nghiêm ngặt. Kiểm tra cả giá trị và kiểu dữ liệu. (VD: `1 === '1'` -> `false`). Luôn luôn khuyên dùng `===`.

### Q6. Các Falsy Values trong JavaScript là gì?
**Trả lời:**
Falsy values là những giá trị khi ép kiểu sang Boolean sẽ thành `false`. JS có đúng 6 giá trị:
`false`, `0` (hoặc `-0`), `""` (chuỗi rỗng), `null`, `undefined`, `NaN`.
Tất cả các giá trị còn lại (bao gồm mảng rỗng `[]`, object rỗng `{}`) đều là Truthy.

### Q7. Tham trị (Pass by Value) và Tham chiếu (Pass by Reference) khác nhau thế nào?
**Trả lời:**
- **Tham trị (Primitives)**: Số, Chuỗi, Boolean. Khi gán biến này cho biến khác, JS tạo một bản sao độc lập. Sửa biến này không đổi biến kia.
- **Tham chiếu (Objects, Arrays)**: Khi gán, JS chỉ copy "địa chỉ vùng nhớ". Nếu sửa property ở biến mới, biến gốc cũng bị thay đổi theo.

### Q8. Nếu 2 key trùng nhau trong Object thì chuyện gì xảy ra?
**Trả lời:**
JavaScript sẽ không báo lỗi. Thay vào đó, giá trị của key được khai báo **sau cùng** sẽ ghi đè lên giá trị của key trước đó.
Ví dụ: `const obj = { a: 1, a: 2 };` thì `obj.a` sẽ có giá trị là `2`.

### Q9. Hoisting trong JavaScript là gì?
**Trả lời:**
Hoisting là cơ chế mà phần **khai báo** (biến, hàm) được đưa lên trên cùng của scope trước khi code thực thi.
- `var` được hoisted và khởi tạo với giá trị `undefined`.
- `let`/`const` được hoisted nhưng đưa vào vùng **TDZ (Temporal Dead Zone)**, nếu truy cập sớm sẽ báo lỗi `ReferenceError`.

---

## 🟡 Cấp độ 2: Middle (Trung cấp)
*Cấp độ Middle yêu cầu hiểu rõ cách trình duyệt hoạt động, xử lý bất đồng bộ và tối ưu hóa UI.*

### Q10. Trình duyệt hiển thị (render) trang web như thế nào?
**Trả lời:**
Tải HTML -> Tạo DOM Tree. Tải CSS -> Tạo CSSOM Tree. Kết hợp DOM + CSSOM -> Tạo Render Tree. Sau đó thực hiện **Layout** (tính toán vị trí) -> **Paint** (vẽ pixel) -> **Composite** (ghép layer).

### Q11. Độ đặc hiệu của CSS (CSS Specificity) hoạt động như thế nào?
**Trả lời:**
Quy tắc ưu tiên (từ cao xuống thấp): `!important` > Inline Styles > ID (`#`) > Class (`.`), Pseudo-classes > Elements (`div`, `p`).

### Q12. Vòng lặp sự kiện (Event Loop) hoạt động ra sao?
**Trả lời:**
JS là ngôn ngữ đơn luồng. Event Loop liên tục kiểm tra Call Stack. Nếu Call Stack rỗng, nó sẽ bốc các callback đã xong từ Task Queue (và Microtask Queue) đưa vào Call Stack để chạy tiếp. (Microtask như Promise có quyền ưu tiên cao hơn Macrotask như setTimeout).

### Q13. Closure trong JavaScript là gì?
**Trả lời:**
Closure là một hàm có thể "ghi nhớ" và truy cập tới các biến nằm trong scope cha của nó, ngay cả khi hàm cha đã chạy xong và bị hủy khỏi Call Stack. Thường dùng để tạo private variables hoặc currying.

### Q14. Từ khóa `this` trong Arrow Function khác gì Regular Function?
**Trả lời:**
- **Regular Function**: `this` phụ thuộc vào **object gọi nó** tại thời điểm chạy (dynamic binding).
- **Arrow Function**: Không có `this` riêng. Nó kế thừa `this` từ scope bọc bên ngoài tại **thời điểm định nghĩa** (lexical binding). Bạn không thể thay đổi `this` của Arrow Function bằng `.bind()`, `.call()`.

### Q15. So sánh `let` và `var` trong vòng lặp `for` có chứa `setTimeout`?
**Trả lời:**
- Dùng `var`: Biến `var` có function-scope. Vòng lặp chạy rất nhanh và tăng biến `i` lên cuối cùng. Khi `setTimeout` chạy, nó sẽ in ra số cuối cùng liên tục.
- Dùng `let`: `let` có block-scope. Ở mỗi lần lặp, một scope mới chứa giá trị `i` riêng biệt được tạo ra. `setTimeout` sẽ in ra các số tăng dần chính xác.

### Q16. Virtual DOM là gì và lợi ích của nó?
**Trả lời:**
Bản sao trong bộ nhớ (memory) của DOM thật. Khi state đổi, React/Vue tạo Virtual DOM mới, so sánh (diffing) với bản cũ, tìm ra chỗ thay đổi nhỏ nhất và chỉ cập nhật chỗ đó lên DOM thật (giúp tối ưu hiệu suất so với cập nhật toàn bộ DOM).

---

## 🔴 Cấp độ 3: Senior (Chuyên sâu / System Design)
*Ở cấp độ này, ứng viên cần có tầm nhìn về kiến trúc ứng dụng, bảo mật và hiệu suất toàn diện.*

### Q17. Quản lý trạng thái (State Management) trong SPA phức tạp như thế nào?
**Trả lời:**
Khi ứng dụng lớn, Senior cần hiểu tách biệt Server State (Data từ API - quản lý bằng React Query/NgRx) và Client State (UI state - Redux, Signals). Tận dụng tính năng Reactive State trực tiếp để giảm re-render.

### Q18. SSR (Server-Side Rendering) vs CSR (Client-Side Rendering) vs SSG?
**Trả lời:**
- **CSR**: Client tải JS về tự render UI. Chậm hiển thị nội dung lần đầu, kém SEO.
- **SSR**: Server render sẵn HTML đầy đủ gửi về. Tốt cho SEO, FCP nhanh, nhưng nặng Server.
- **SSG**: Pre-build HTML tĩnh lúc deploy. Cực nhanh, phù hợp làm Blog/Docs.

### Q19. Core Web Vitals là gì? Làm sao cải thiện?
**Trả lời:**
- **LCP (Largest Contentful Paint)**: Tối ưu ảnh, Preload, dùng WebP.
- **INP (Interaction to Next Paint)**: Tránh block Main Thread, Tree Shaking, Code Splitting.
- **CLS (Cumulative Layout Shift)**: Set sẵn `width/height` cho ảnh, không chèn banner đột ngột đẩy nội dung xuống.

### Q20. CSP (Content Security Policy) chống XSS như thế nào?
**Trả lời:**
CSP là HTTP Header yêu cầu trình duyệt chỉ load tài nguyên (script, ảnh) từ danh sách miền cho phép (whitelist). Ngăn chặn mã độc XSS thực thi từ các script bên thứ ba không tin cậy.

### Q21. Kiến trúc Micro-frontends là gì?
**Trả lời:**
Chia nhỏ một ứng dụng Frontend khổng lồ thành nhiều project nhỏ (có thể code bằng các framework khác nhau). Chúng được nhúng lại với nhau lúc runtime bằng Webpack Module Federation, giúp các team deploy độc lập.
