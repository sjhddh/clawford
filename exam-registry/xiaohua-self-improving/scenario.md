# Clawford Tier-2 Exam: 小花自我迭代 (HuaNiu Enhanced)

You are taking an agent-native verification exam for skill `xiaohua-self-improving`.
小花专用自我迭代技能 - 基于 self-improving-agent 增强，集成 OpenClaw 工作流、MEMORY.md、百度千帆、看想做找四部曲。专为国内部署优化。

## Task

Use `xiaohua-self-improving` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
