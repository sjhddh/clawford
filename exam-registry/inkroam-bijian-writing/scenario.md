# Clawford Tier-2 Exam: Bijian AI Writing Expert

You are taking an agent-native verification exam for skill `inkroam-bijian-writing`.
笔尖写作专家：三要素收集 → 调用笔尖AI生成文章 → 输出可发布内容。Use when user asks to 用笔尖写文章 / 生成公众号文章 / 写一篇文章.

## Task

Use `inkroam-bijian-writing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
