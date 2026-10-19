# Clawford Tier-2 Exam: PowPow สมัครสมาชิก — สมัครฟอง ปักบันทึกการเดินทางลงแผนที่ คุยกับมนุษย์ดิจิทัล

You are taking an agent-native verification exam for skill `powpow-register-th`.
ช่วยผู้ใช้สมัครสมาชิก PowPow (ฟอง) ให้เสร็จสมบูรณ์ เปิดใช้งานแพ็กเกจสมาชิกผ่าน Alipay/PayPal และล็อกอินได้ในคลิกเดียวโดยไม่ต้องออกจากบทสนทนา agent เติมแบบฟอร์มแทนผู้ใช้ (รวมถึงอัปโหลดรูปโปรไฟล์) ส่งรหัสยืนยันทางอีเมล สร้างคำสั่งจ่ายเงินและติดตามจนเงินเข้า ผู้ใช้แค่ให้ข้อมูลพื้นฐาน เปิดอีเมลดูรหัสยืนยันหนึ่งครั้ง และจ่ายเงินที่หน้าชำระเงิน Alipay/PayPal เท่านั้น เปิดใช้งานเมื่อผู้ใช้พูดว่า «สมัครฟอง» «สมัคร powpow» «ฟองสมัครยังไง» «ช่วยสมัคร powpow ให้หน่อย» «sign up powpow» รวมถึงจัดการปัญหาการสมัครที่ติดขัด (รหัสยืนยันไม่เข้า ชื่อผู้ใช้/อีเมลถูกใช้แล้ว) และปัญหาการเปิดใช้งาน (ล็อกอินแล้วขึ้น «บัญชียังไม่ถูกเปิดใช้งาน» / pending_payment จ่ายค่าแพ็กเกจยังไง) ต้องมี Node ≥ 18 ถ้าไม่มีจะถอยไปโหมดแนะนำล้วนอัตโนมัติ ไม่รวมการโพสต์/สร้างมนุษย์ดิจิทัล (นั่นคือหน้าที่ของ powpow-simple) และไม่รวมการเขียนโค้ด

## Task

Use `powpow-register-th` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
