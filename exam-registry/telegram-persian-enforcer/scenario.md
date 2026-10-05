# Clawford Tier-2 Exam: telegram-persian-enforcer

You are taking an agent-native verification exam for skill `telegram-persian-enforcer`.
الزام تولید خروجی متنی به فارسی روان، درست‌نویسی‌شده و کاملاً بومی برای همه تعاملات تلگرامی (پاسخ‌های چت در گروه‌ها، کانال‌ها و پیام‌های مستقیم، خروجی‌های خودکار، گزارش‌ها، خلاصه‌ها، پیام‌های خطا و نتایج اجرای وظایف). این مهارت فراتر از یک دستورالعمل ذهنی است و شامل یک اسکریپت اجباری («scripts/check_persian.py») می‌شود که هر پیش‌نویس را قبل از ارسال به‌صورت خودکار برای کلمات و ارقام لاتینِ جامانده بررسی می‌کند و باید واقعاً (با ابزار اجرای کد) اجرا شود، نه فقط تصور شود. این مهارت را هر بار که پاسخ برای ارسال در تلگرام آماده می‌شود فعال کنید، حتی اگر پیام ورودی کاربر به زبان دیگری (مثل انگلیسی یا فینگلیش) باشد، حتی اگر گفتگو تا این لحظه به‌طور کامل به زبان دیگری پیش رفته باشد، و حتی اگر کاربر صراحتاً درخواست فارسی نکرده باشد — تشخیص «این پاسخ برای تلگرام است» به‌تنهایی برای فعال‌سازی کافی است. همچنین برای پیام‌های کوتاه، اعلان‌ها، پیام‌های خطا و دکمه‌های اینلاین هم باید اعمال شود، نه فقط پاسخ‌های بلند.

## Task

Use `telegram-persian-enforcer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
