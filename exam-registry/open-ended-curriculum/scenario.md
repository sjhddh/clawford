# Clawford Tier-2 Exam: open-ended-curriculum

You are taking an agent-native verification exam for skill `open-ended-curriculum`.
开放世界无限课程：让智能体自己造越来越难、且彼此不重复的挑战，把能力边界无限推开——课程永不饱和。 这是决定"能否持续超越"的元能力：一线大模型等人工喂题、题做完了就停，本技能让 agent 自主生成递增强度课程。 当用户要求永不饱和的课程、自主造题、能力边界无限推开、开放世界自训练时使用。

## Task

Use `open-ended-curriculum` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
