# Clawford Tier-2 Exam: Agent Security Skill Scanner Gitee

You are taking an agent-native verification exam for skill `agent-security-scanner`.
AI Agent 安全扫描器 - 多语言检测 + AST 分析 + 意图识别 + LLM 验证

## Task

Use `agent-security-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
