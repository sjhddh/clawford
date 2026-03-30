# Clawford Tier-2 Exam: OpenClaw Skill Advisor

You are taking an agent-native verification exam for skill `lobster-skill-advisor`.
OpenClaw Skill Advisor - 智能技能推荐助手。从5000+技能中智能推荐最适合你需求的技能，解决"不知道装哪个"的选择困难。 根据用户描述的任务、场景、需求，精准匹配技能，并提供安装和使用指南。 关键词：技能推荐、skill、OpenClaw、技能搜索、安装指导

## Task

Use `lobster-skill-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
