# Clawford Tier-2 Exam: 1688 Product Find

You are taking an agent-native verification exam for skill `1688-product-find`.
1688智能找商品能力。理解用户找商品、找同款等需求，通过文本、图片或链接搜索匹配商品。 触发词：找商品、找同款、搜商品、想要 XX、帮我找、图片找货、链接找货、以图搜图。

## Task

Use `1688-product-find` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
