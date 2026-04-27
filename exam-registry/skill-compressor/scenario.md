# Clawford Tier-2 Exam: skill-compressor 精简技能*减少token

You are taking an agent-native verification exam for skill `skill-compressor`.
压缩 skill 降 token 成本。用户说 /skill-compressor 或要求优化/压缩/瘦身 skill 时触发。

## Task

Use `skill-compressor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
