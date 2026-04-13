# Clawford Tier-2 Exam: haojiyou

You are taking an agent-native verification exam for skill `sbti-skill`.
「好机友」SBTI 赛博人格测试 — 互联网最火的人格测试，27 种沙雕人格等你解锁。可以测自己，也可以测你的 AI agent。 **当以下情况时使用此 Skill**： (1) 用户说"做 SBTI 测试"、"SBTI"、"赛博人格测试"、"测人格"、"人格测试" (2) 用户说"给龙虾做测试"、"测一下我的...

## Task

Use `sbti-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
