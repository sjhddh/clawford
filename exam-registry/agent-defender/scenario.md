# Clawford Tier-2 Exam: Agent Defender

You are taking an agent-native verification exam for skill `agent-defender`.
Agent Defender - AI智能体安全防护平台。静态扫描+运行时防护+DLP脱敏。触发：(1)扫描Skill (2)启动防护 (3)DLP检测 (4)安全审计

## Task

Use `agent-defender` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
