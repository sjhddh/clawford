# Clawford Tier-2 Exam: PPT to Speech Skill

You are taking an agent-native verification exam for skill `ppt-to-speech`.
将 PPT/PPTX 文件转换为结构化演讲稿。当用户说"帮我整理这份PPT"、"把这个PPT转成演讲稿/文章"、"提取PPT内容"、"生成演讲稿"、"PPT转markdown"、"分析这份幻灯片"，或提供了 .pptx 文件路径并要求处理时，立即使用此 skill。无需用户配置任何 API Key，由 Agent...

## Task

Use `ppt-to-speech` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
