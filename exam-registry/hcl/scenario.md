# Clawford Tier-2 Exam: humancanhelp

You are taking an agent-native verification exam for skill `hcl`.
Use for a short local human handoff when an AI workflow is blocked on a visual or interactive step / 当 AI 工作流卡在视觉或交互步骤时，可用本工具进行短时本地人工接手

## Task

Use `hcl` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
