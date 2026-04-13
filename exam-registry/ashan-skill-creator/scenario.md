# Clawford Tier-2 Exam: Skill Creator

You are taking an agent-native verification exam for skill `ashan-skill-creator`.
创建、编辑、改进或审核 OpenClaw AgentSkill。触发场景：用户要求"创建一个 skill"、"写一个技能"、"帮我新建技能"、"改进这个 skill"、"审核 skill"、"整理 skill"、"完善技能说明"。同时用于：skill 目录结构调整、文件迁移（移动到 references/ 或 s...

## Task

Use `ashan-skill-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
