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

### Q10. Sự khác biệt giữa Cookie, localStorage và sessionStorage là gì?
**Trả lời:**
- **Cookie**: Nhỏ (chỉ ~4KB) giống như một chiếc ví nhỏ. Mỗi lần trình duyệt gọi API, Cookie đều được đính kèm gửi lên Server. Rất phù hợp để lưu trữ *Authentication Token*.
- **localStorage**: Như chiếc tủ trong nhà (~5MB-10MB). Dữ liệu được lưu vĩnh viễn đến khi bạn xóa nó. Rất thích hợp để lưu cấu hình giao diện (Dark Mode, User Settings).
- **sessionStorage**: Như chiếc balo dùng tạm, chỉ tồn tại trong phiên làm việc hiện tại (browser session). Khi đóng tab trình duyệt là biến mất. Phù hợp để lưu data form đang nhập dở dang tránh việc user F5 bị mất.

---

## 🟡 Cấp độ 2: Middle (Trung cấp)
*Cấp độ Middle yêu cầu hiểu rõ cách trình duyệt hoạt động, xử lý bất đồng bộ và tối ưu hóa UI.*

### Q11. Trình duyệt hiển thị (render) trang web như thế nào?
**Trả lời:**
Tải HTML -> Tạo DOM Tree. Tải CSS -> Tạo CSSOM Tree. Kết hợp DOM + CSSOM -> Tạo Render Tree. Sau đó thực hiện **Layout** (tính toán vị trí) -> **Paint** (vẽ pixel) -> **Composite** (ghép layer).

### Q12. Độ đặc hiệu của CSS (CSS Specificity) hoạt động như thế nào?
**Trả lời:**
Quy tắc ưu tiên (từ cao xuống thấp): `!important` > Inline Styles > ID (`#`) > Class (`.`), Pseudo-classes > Elements (`div`, `p`).

### Q13. Vòng lặp sự kiện (Event Loop) hoạt động ra sao?
**Trả lời:**
JS là ngôn ngữ đơn luồng. Event Loop liên tục kiểm tra Call Stack. Nếu Call Stack rỗng, nó sẽ bốc các callback đã xong từ Task Queue (và Microtask Queue) đưa vào Call Stack để chạy tiếp. (Microtask như Promise có quyền ưu tiên cao hơn Macrotask như setTimeout).

### Q14. Closure trong JavaScript là gì?
**Trả lời:**
Closure là một hàm có thể "ghi nhớ" và truy cập tới các biến nằm trong scope cha của nó, ngay cả khi hàm cha đã chạy xong và bị hủy khỏi Call Stack. Thường dùng để tạo private variables hoặc currying.

### Q15. Từ khóa `this` trong Arrow Function khác gì Regular Function?
**Trả lời:**
- **Regular Function**: `this` phụ thuộc vào **object gọi nó** tại thời điểm chạy (dynamic binding).
- **Arrow Function**: Không có `this` riêng. Nó kế thừa `this` từ scope bọc bên ngoài tại **thời điểm định nghĩa** (lexical binding). Bạn không thể thay đổi `this` của Arrow Function bằng `.bind()`, `.call()`.

### Q16. So sánh `let` và `var` trong vòng lặp `for` có chứa `setTimeout`?
**Trả lời:**
- Dùng `var`: Biến `var` có function-scope. Vòng lặp chạy rất nhanh và tăng biến `i` lên cuối cùng. Khi `setTimeout` chạy, nó sẽ in ra số cuối cùng liên tục.
- Dùng `let`: `let` có block-scope. Ở mỗi lần lặp, một scope mới chứa giá trị `i` riêng biệt được tạo ra. `setTimeout` sẽ in ra các số tăng dần chính xác.

### Q17. Virtual DOM là gì và lợi ích của nó?
**Trả lời:**
Bản sao trong bộ nhớ (memory) của DOM thật. Khi state đổi, React/Vue tạo Virtual DOM mới, so sánh (diffing) với bản cũ, tìm ra chỗ thay đổi nhỏ nhất và chỉ cập nhật chỗ đó lên DOM thật (giúp tối ưu hiệu suất so với cập nhật toàn bộ DOM).

---

## 🔴 Cấp độ 3: Senior (Chuyên sâu / System Design)
*Ở cấp độ này, ứng viên cần có tầm nhìn về kiến trúc ứng dụng, bảo mật và hiệu suất toàn diện.*

### Q18. SSR (Server-Side Rendering) vs CSR (Client-Side Rendering) vs SSG?
**Trả lời:**
- **CSR**: Client tải JS về tự render UI. Chậm hiển thị nội dung lần đầu, kém SEO.
- **SSR**: Server render sẵn HTML đầy đủ gửi về. Tốt cho SEO, FCP nhanh, nhưng nặng Server.
- **SSG**: Pre-build HTML tĩnh lúc deploy. Cực nhanh, phù hợp làm Blog/Docs.

### Q19. Làm sao để tối ưu hóa App Frontend tải nhanh hơn? (Web Performance)
**Trả lời:** Một Senior developer cần nhớ checklist 5 bước sau:
1. **Polyfill**: Chỉ gửi Polyfill cho browser cũ nếu cần, tránh tải thừa.
2. **Compression (Gzip/Brotli)**: Bật nén tại server, có thể giảm đến 70% dung lượng payload.
3. **Minification & Uglification**: Xóa hết khoảng trắng, chú thích (Minify) và đổi tên biến dài thành tên ký tự đơn (Uglify) để làm giảm kích thước file mã nguồn JS.
4. **Code Splitting (Lazy Loading)**: Đừng tải nguyên cả app lúc khởi động. Ví dụ: admin dashboard chỉ nên được load khi user thực sự là admin và đăng nhập thành công.
5. **Tree Shaking**: Cắt bỏ các function/code thừa từ thư viện. Tưởng tượng thư viện như cái cây có 100 quả, mình chỉ lấy 2 quả thì trình đóng gói (Webpack/Vite) sẽ giũ sạch 98 quả kia đi.

### Q20. Tối ưu hình ảnh trong trang E-commerce lớn (Ví dụ: Trang có 50 ảnh, mỗi ảnh 5MB)?
**Trả lời:**
1. **Kích thước phù hợp**: Không load ảnh 3000px chỉ để hiển thị vào khung 800px.
2. **Format**: Sử dụng ảnh `WebP` (giảm 25-35% dung lượng so với JPEG) hoặc `AVIF`.
3. **Lazy Loading**: Áp dụng load on-screen cho ảnh ngoài viewport. *Lưu ý: Phải set cứng `width/height` cho ảnh để tránh hiện tượng Layout Shift (CLS) khi ảnh render ra.*
4. **Sử dụng CDN**: Phân phối ảnh từ máy chủ biên (edge server) gần user nhất. Các CDN hiện đại (như Cloudinary) có thể tự động biến đổi, resize ảnh và đổi định dạng theo thiết bị request.
5. **Responsive Images**: Gửi ảnh nhẹ cho Mobile, ảnh lớn cho Desktop.

### Q21. Làm thế nào để đảm bảo Code Quality trong một dự án lớn?
**Trả lời:**
1. **Linter & Formatter**: Dùng `ESLint` bắt lỗi logic và `Prettier` ép chuẩn format code, tránh cãi nhau về dấu cách hay dấu tab trong team.
2. **Testing**: `Unit Test` (Jest/Vitest) cho business logic và `E2E Test` (Playwright/Cypress) cho end-user flow.
3. **Audit Dependencies**: Quét gói thư viện bằng `npm audit` hoặc `Snyk` để rà soát lỗi bảo mật. Các dự án lớn có thư mục node_modules chứa hàng nghìn gói nguy hiểm tiềm ẩn.
4. **Accessibility (a11y)**: Test với trình đọc màn hình, đảm bảo khả năng điều hướng bằng bàn phím.
5. **Lighthouse CI**: Tích hợp CI/CD để tự động phát hiện hiệu năng giảm trước khi tới tay người dùng.

### Q22. XSS (Cross-Site Scripting) là gì? Khắc phục như thế nào?
**Trả lời:**
- **Khái niệm**: Kẻ tấn công lợi dụng lỗ hổng để chèn mã JS độc hại (ví dụ: qua phần comment bài post). Khi user khác tải trang, mã JS này thực thi và lấy cắp session/password gửi cho hacker.
- **Cách phòng chống**:
  1. **Sanitize Data**: Làm sạch mọi input từ user trước khi lưu.
  2. **Framework Protection**: Các framework hiện đại (React/Angular) mặc định đã có cơ chế tự động **escape** mọi giá trị binding (biến string mã độc thành dạng text thuần). Chỉ cẩn thận khi bắt buộc dùng kiểu `dangerouslySetInnerHTML`.
  3. **Content Security Policy (CSP)**: Thiết lập lớp phòng thủ cuối cùng bằng header báo cho trình duyệt chỉ được phép chạy JS từ nguồn (domain) đáng tin cậy.

### Q23. CDN (Content Delivery Network) hoạt động như thế nào?
**Trả lời:**
CDN là người hùng thầm lặng giúp App load siêu tốc trên toàn cầu.
Khi User ở Việt Nam truy cập trang web (có server gốc ở Mỹ):
1. **DNS Routing**: DNS nhận diện vị trí và chỉ dẫn request đến server (Edge server) của CDN gần nhất (ví dụ: Singapore hoặc ngay tại Hà Nội).
2. **Caching**: Edge Server đã lưu (cache) sẵn tài nguyên tĩnh (Images, JS, CSS). Trả về tức thì mà không cần qua tận Mỹ.
3. Kết quả: Tốc độ giảm từ 200ms xuống chỉ còn 20ms, nâng cao trải nghiệm người dùng tối đa.
