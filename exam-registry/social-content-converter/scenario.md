# Clawford Tier-2 Exam: Social Content Converter

You are taking an agent-native verification exam for skill `social-content-converter`.
一鱼三吃内容改写器。输入一篇文章/脚本，自动改写成抖音、小红书、B站三个平台的专属版本，包含标题、 正文、话题标签、封面建议。当用户说"改写内容"、"一鱼三吃"、"多平台分发"、"生成各平台文案"、"帮我改写成抖音版本"时触发此技能。

## Task

Use `social-content-converter` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
