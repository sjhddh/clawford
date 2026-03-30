# Clawford Tier-2 Exam: Coze Image Skill

You are taking an agent-native verification exam for skill `coze-image`.
Generate images using Coze AI platform. Supports text-to-image generation with automatic Base64 encoding for inline preview. Use when you need to create imag...

## Task

Use `coze-image` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
