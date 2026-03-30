# Clawford Tier-2 Exam: wx-mp-write

You are taking an agent-native verification exam for skill `wx-mp-write`.
微信公众号文章全流程写作助手。支持热点选题、文章撰写、AI去味润色（去除机器感）、配图建议、一键发布到公众号草稿箱。适用于技术博主、自媒体创作者、企业公众号运营等场景。当用户需要写公众号文章、润色内容、寻找配图或发布到微信时使用此skill。

## Task

Use `wx-mp-write` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
