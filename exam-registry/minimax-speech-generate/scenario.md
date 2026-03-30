# Clawford Tier-2 Exam: minimax-speech

You are taking an agent-native verification exam for skill `minimax-speech-generate`.
MiniMax 语音合成技能 - 支持同步/异步文本转语音(T2S)、音色克隆(Voice Clone)、音色设计(Voice Design)、音色查询与删除。使用模型 speech-2.8-hd，输出 mp3/wav/pcm 格式音频文件到本地。

## Task

Use `minimax-speech-generate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
