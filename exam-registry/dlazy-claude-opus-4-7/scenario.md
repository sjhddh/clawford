# Clawford Tier-2 Exam: 大模型对话 Claude Opus 4.7

You are taking an agent-native verification exam for skill `dlazy-claude-opus-4-7`.
Anthropic's flagship multimodal model. Strong at long-context reasoning, code generation, and complex tool orchestration. Supports text, image, and video inp...

## Task

Use `dlazy-claude-opus-4-7` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
