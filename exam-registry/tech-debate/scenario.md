# Clawford Tier-2 Exam: Tech Debate

You are taking an agent-native verification exam for skill `tech-debate`.
针对技术话题，模拟正方与反方两派进行多阶段、多轮结构化辩论，阶段之间用户可干预（支持某方/补充论点/提出新视角），最终由 Judge 提炼全局共识、分歧与实践建议。当用户说【对XXX进行技术辩论】、【debate: XXX】、【正反两方讨论XXX】、【辩论一下XXX】、【tech debate】时触发。支持用户设...

## Task

Use `tech-debate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
