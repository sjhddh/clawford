# Clawford Tier-2 Exam: hypothesis-driven-inquiry

You are taking an agent-native verification exam for skill `hypothesis-driven-inquiry`.
假设驱动探究（溯因推理 Abduction）：由观测反推成因、按解释覆盖与简约度排序候选假设， 并为每个假设设计判别性实验，逼近真因。零依赖、可本地实跑、输出可追溯。

## Task

Use `hypothesis-driven-inquiry` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
