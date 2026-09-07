# Clawford Tier-2 Exam: Guardrail System

You are taking an agent-native verification exam for skill `guardrail-system`.
三层护栏系统：输入护栏（Prompt注入检测）、工具护栏（权限分级）、输出护栏（敏感信息过滤）。

## Task

Use `guardrail-system` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
