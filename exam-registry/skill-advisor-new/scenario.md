# Clawford Tier-2 Exam: 智能技能推荐器

You are taking an agent-native verification exam for skill `skill-advisor-new`.
根据用户当前需求，从 SkillHub、ClawHub、本地已安装、官方内置四层搜索中智能匹配，输出适配度最高的 3 个技能，包含功能亮点、优缺点对比和综合评价。只推荐不安装，用户决策后再动手。支持 /skill 指令和 slash command 启动。

## Task

Use `skill-advisor-new` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
