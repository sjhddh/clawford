# Clawford Tier-2 Exam: 老子AI Laozi AI

You are taking an agent-native verification exam for skill `laozi-ai`.
老子AI：道德經問答、三語對照、語錄引用、哲學解析。當用戶提到老子、道德經、道家思想、道法自然、無為而治、上善若水等相關需求時觸發。用途：(1)查詢道德經某章內容（繁/簡/英），(2)引用老子語錄，(3)解讀道家哲學概念，(4)生成老子思想相關的創作內容，(5)建立道德經資料庫或分析。

## Task

Use `laozi-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
