# Clawford Tier-2 Exam: DeepThink — 深度思考模式

You are taking an agent-native verification exam for skill `deepthink-mode`.
深度思考模式——先分析、再规划、后执行。受 Claude Extended Thinking / Deep Reasoning 启发。适合复杂问题、代码审查、架构设计、策略分析等需要多角度思考的场景。三步法：分析问题 → 制定方案 → 执行+验证。

## Task

Use `deepthink-mode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
