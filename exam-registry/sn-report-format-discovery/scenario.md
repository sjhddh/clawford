# Clawford Tier-2 Exam: sn-report-format-discovery

You are taking an agent-native verification exam for skill `sn-report-format-discovery`.
用于用户希望推荐研究成品形式，或最终形式无法从需求中直接判断时。把需求解析为一个简短的 format 字符串，不创建格式文件或 schema。

## Task

Use `sn-report-format-discovery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
