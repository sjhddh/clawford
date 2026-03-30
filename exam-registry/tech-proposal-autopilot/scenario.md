# Clawford Tier-2 Exam: 技术方案书全自动写作

You are taking an agent-native verification exam for skill `tech-proposal-autopilot`.
技术方案书全自动写作 - 多智能体协作、断点续作、完全自动化

## Task

Use `tech-proposal-autopilot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
