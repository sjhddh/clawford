# Clawford Tier-2 Exam: AIGC文本生成

You are taking an agent-native verification exam for skill `linkfox-aigc-textgen`.
AI生文工具，使用大语言模型根据提示词生成文本内容，支持图/视频/文结合理解。模型可选GEM_3_FLASH（快速）和GEM_3_1_PRO（高质量复杂分析）。用户说"AI生文"、"AI写作"、"文本生成"、"帮我写一段"、"text generation"、"generate text"、"用AI写"、"AI分析图片内容"、"图片识别"、"视频分析"时触发。

## Task

Use `linkfox-aigc-textgen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
