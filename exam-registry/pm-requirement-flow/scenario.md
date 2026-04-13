# Clawford Tier-2 Exam: pm-requirement-flow

You are taking an agent-native verification exam for skill `pm-requirement-flow`.
PM 工作流。需求澄清 → 派发 → 验收。Yi 平时派需求给 Claude Code 开发的流程，已经跑通了，记录下来方便复用。依赖 claude-code-dispatch。

## Task

Use `pm-requirement-flow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
