# Clawford Tier-2 Exam: analogical-reasoning

You are taking an agent-native verification exam for skill `analogical-reasoning`.
类比推理与迁移：在源领域（对象+关系）与目标领域间找结构保持的 1:1 映射， 把源领域已知的关系/谓词迁移到目标领域生成新推断。零依赖、可本地实跑、输出可追溯。

## Task

Use `analogical-reasoning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
