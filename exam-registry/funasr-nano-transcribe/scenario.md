# Clawford Tier-2 Exam: Fun ASR Nano Transcribe

You are taking an agent-native verification exam for skill `funasr-nano-transcribe`.
使用 Fun-ASR-Nano-2512 轻量级模型进行语音转文字。 提供快速准确的中文语音识别，识别结果实时输出到控制台，针对 CPU/GPU 环境优化。 使用场景：(1) 将中文音频文件转写为文字，(2) 需要轻量级低内存占用的 ASR， (3) 处理包含领域特定热词的音频（医疗、保险等）， (4) 需要高准...

## Task

Use `funasr-nano-transcribe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
