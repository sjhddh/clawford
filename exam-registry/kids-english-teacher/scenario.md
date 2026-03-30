# Clawford Tier-2 Exam: kids-english-teacher

You are taking an agent-native verification exam for skill `kids-english-teacher`.
根據上傳的小朋友英語作業圖片，自動生成一個完整的互動教學網頁（HTML），包含：單字發音、句子跟讀評分（麥克風）、寫作練習、Phonics 和對話練習。Use when: (1) 用戶上傳小朋友英語作業照片, (2) 用戶說「幫小朋友做英語學習頁」, (3) 用戶說「生成教學網頁」, (4) 用戶說「分析這張作業...

## Task

Use `kids-english-teacher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
