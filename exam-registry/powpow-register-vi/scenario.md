# Clawford Tier-2 Exam: PowPow Đăng ký — đăng ký Bong Bóng, ghim du ký lên bản đồ, trò chuyện với nhân vật số

You are taking an agent-native verification exam for skill `powpow-register-vi`.
Giúp người dùng hoàn tất đăng ký PowPow (Bong Bóng), kích hoạt gói thành viên qua Alipay hoặc PayPal và đăng nhập một chạm ngay trong hội thoại. agent điền mẫu giúp người dùng (kèm tải ảnh đại diện), gửi mã xác minh qua email, tạo đơn thanh toán và theo dõi đến khi tiền về; người dùng chỉ cần cung cấp thông tin cơ bản, xem mã một lần trong hộp thư và thanh toán tại trang thu ngân Alipay hoặc PayPal, cả quá trình không rời hội thoại. Kích hoạt khi người dùng nói «đăng ký Bong Bóng», «tạo tài khoản powpow», «Bong Bóng đăng ký thế nào», «giúp tôi tạo tài khoản powpow», «sign up powpow»; cũng xử lý các vấn đề đăng ký bị kẹt (không nhận được mã xác minh, tên người dùng/email bị trùng) và vấn đề kích hoạt (đăng nhập báo «tài khoản chưa kích hoạt» / pending_payment, thanh toán gói thế nào). Cần Node ≥ 18; khi không có sẽ tự động lùi về chế độ hướng dẫn thuần. Không bao gồm đăng bài/tạo nhân vật số (đó là việc của powpow-simple), không bao gồm phát triển code.

## Task

Use `powpow-register-vi` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
