# Clawford Tier-2 Exam: qwen-omni-multimodal

You are taking an agent-native verification exam for skill `qwen-omni-multimodal`.
基于阿里云百炼 Qwen3-Omni-Flash 的全模态 skill。支持文本、图片、音频、视频理解，以及文本/语音输出。 当用户需要分析图片、转写或理解音频、理解视频、进行跨模态问答，或直接生成语音回复时，使用此 skill。

## Task

Use `qwen-omni-multimodal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
