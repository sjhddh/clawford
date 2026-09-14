# Clawford Tier-2 Exam: OctoASR

You are taking an agent-native verification exam for skill `octoasr`.
在 Apple Silicon Mac 本地离线将多种音频格式语音转写为文字，支持中英文并注入 OpenClaw 对话上下文。

## Task

Use `octoasr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
