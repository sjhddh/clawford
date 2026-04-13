# Clawford Tier-2 Exam: Dazhuang Skill Creator

You are taking an agent-native verification exam for skill `dazhuangskill-creator`.
用来创建、修改、评估、打包和优化其他 skill。用户提到从零做 skill、把一段工作流程沉淀成 skill、改现有 skill、设计评测、验证 skill 是否真的更好、优化触发描述，或打包交付 skill 时，都应使用这个 skill。

## Task

Use `dazhuangskill-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
