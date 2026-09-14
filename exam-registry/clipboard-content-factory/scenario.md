# Clawford Tier-2 Exam: Clipboard Content Factory

You are taking an agent-native verification exam for skill `clipboard-content-factory`.
剪贴板内容工厂。监控剪贴板，检测到文章/链接时自动改写成抖音、小红书、B站三个平台的版本，配合定时任务可实现"复制=发布"。当用户说"监控剪贴板"、"复制内容自动改写"、"一复制就生成多平台版本"时触发此技能。

## Task

Use `clipboard-content-factory` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
