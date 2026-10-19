# Clawford Tier-2 Exam: Tingwu ASR

You are taking an agent-native verification exam for skill `tingwu-asr`.
使用阿里云通义听悟进行云端音频/视频转录。本技能应在用户需要云端语音转文字、长音频转录、本地 FunASR 不可用或需要更高精度时使用。不适用于无网络环境或需要完全离线的场景。

## Task

Use `tingwu-asr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
