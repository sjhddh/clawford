# Clawford Tier-2 Exam: Chinese Voice Detective Mystery Game

You are taking an agent-native verification exam for skill `detective-mystery`.
中文语音侦探推理游戏。适用于用户想玩一场沉浸式推理探案的场景：由 LLM 生成包含嫌疑人、线索和真凶的完整案件，玩家通过审讯嫌疑人（支持 ASR 语音或文本输入）、勘察现场、收集证据，最终提出指控并获得评分。支持多音色 TTS 为不同嫌疑人配音，审讯历史自动压缩防止上下文溢出，案件生成后自动验证逻辑自洽性。支持存...

## Task

Use `detective-mystery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
