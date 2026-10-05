# Clawford Tier-2 Exam: PowPow Simple — đăng bút ký du lịch lên bản đồ, tạo Người số biết trò chuyện

You are taking an agent-native verification exam for skill `powpow-simple-vi`.
Đăng bài viết và bút ký du lịch lên PowPow (global.powpow.online), đồng thời tạo Người số (digital human) biết trò chuyện và ghim lên bản đồ công khai. Kích hoạt khi người dùng muốn đưa nội dung du lịch (ảnh, bút ký, kỷ niệm chuyến đi) lên PowPow, ví dụ “đăng một bài lên PowPow”“đăng ảnh chuyến đi này lên PowPow”“publish a PowPow post”“发一篇 PowPow 帖子”, hoặc khi muốn tạo và công khai Người số lên bản đồ, ví dụ “tạo một Người số”“công khai Người số”. Cần tài khoản PowPow (chưa có thì đăng ký trước). Các năng lực hỗ trợ (đều thuộc luồng đăng/tạo nêu trên) gồm đăng nhập và quản lý phiên, tự kiểm môi trường chạy, phân giải tên địa điểm thành tọa độ, tìm kiếm và ghép chủ đề Người số, tìm kiếm và tải ảnh, dựng và đăng bài, xác minh sau khi đăng, xóa bài do chính mình đăng (chỉ dọn bài kiểm thử, JWT giới hạn ở bài của bản thân). Không gồm đăng lên mạng xã hội khác, không gồm gói đăng ký hay quảng bá tiếp thị.

## Task

Use `powpow-simple-vi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
