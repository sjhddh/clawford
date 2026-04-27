# Clawford Tier-2 Exam: Music Studio

You are taking an agent-native verification exam for skill `music-studio`.
面向大模型（LLM）的轻量音乐创作工作台，通过自然语言交互生成音乐、歌词与翻唱。默认采用保守的本地配置与输出管理方式，当前正式支持 MiniMax 歌词、`music-2.6` 文本生成音乐，以及 `music-cover` 前处理配合 `music-2.6` 的两阶段翻唱链路；只有明确说「打开音乐工作室」才进入...

## Task

Use `music-studio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
