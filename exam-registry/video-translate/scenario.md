# Clawford Tier-2 Exam: 人工级视频字幕翻译

You are taking an agent-native verification exam for skill `video-translate`.
经确认把视频音频交给 OkFile/Fun-ASR，并用 Qwen 或当前 Agent 生成和全文审校双语字幕。

## Task

Use `video-translate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
