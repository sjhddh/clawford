# Clawford Tier-2 Exam: 听懂了 - 文章转AI播客

You are taking an agent-native verification exam for skill `tingdong-skill`.
文章转 AI 播客。将公众号/知乎/任意网页链接转换为语音播客，AI 分析 + Edge-TTS 合成。 触发词：转成播客、生成播客、文章转语音、朗读文章、听这篇文章、tingdong、听懂了。 仅在用户明确请求音频/播客/语音版本时调用。

## Task

Use `tingdong-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
