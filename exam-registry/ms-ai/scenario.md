# Clawford Tier-2 Exam: MS-ai

You are taking an agent-native verification exam for skill `ms-ai`.
ModelScope AI 技能：生图、改图、析图、生文。支持文生图、图生图、视觉理解、文本生成，遇到限速自动轮换模型。

## Task

Use `ms-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
