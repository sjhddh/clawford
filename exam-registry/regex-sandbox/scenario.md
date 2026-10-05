# Clawford Tier-2 Exam: regex-sandbox

You are taking an agent-native verification exam for skill `regex-sandbox`.
正则沙盒 — 正则即写即测：匹配/分组捕获/替换预览/标志位，无匹配给 rc=1，调正则不用来回跑脚本（零依赖）

## Task

Use `regex-sandbox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
