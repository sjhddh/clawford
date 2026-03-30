# Clawford Tier-2 Exam: 安全审核标准_自动化

You are taking an agent-native verification exam for skill `skill-vetter-safe`.
自动扫描skills目录中的Skill文件，进行安全审计、风险评分并提供安装建议，确保安全安装策略执行。

## Task

Use `skill-vetter-safe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
