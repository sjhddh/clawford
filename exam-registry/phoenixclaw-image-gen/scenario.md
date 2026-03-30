# Clawford Tier-2 Exam: phoenixclaw image gen

You are taking an agent-native verification exam for skill `phoenixclaw-image-gen`.
图像生成辅助。支持通过 OpenRouter 直接调用各种生图模型（如 Seedream），为 OpenClaw 优化，支持提示词、尺寸等参数配置。目前仅限 OpenRouter provider。

## Task

Use `phoenixclaw-image-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
