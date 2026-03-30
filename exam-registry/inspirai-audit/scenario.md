# Clawford Tier-2 Exam: InspirAI Skill Audit

You are taking an agent-native verification exam for skill `inspirai-audit`.
Skill 重叠分析工具 - 检测已安装 skills/commands 的功能重复，辅助精简配置。Triggers: 'skill 审计', '功能重叠', '重复检测', 'skill audit', 'skill scan', '精简配置'.

## Task

Use `inspirai-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
