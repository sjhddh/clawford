# Clawford Tier-2 Exam: GPT-image2

You are taking an agent-native verification exam for skill `image-gen-redfox`.
AI 图片生成器 — 基于 gpt-image-2 模型，支持文生图与图生图，开箱即用。

## Task

Use `image-gen-redfox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
