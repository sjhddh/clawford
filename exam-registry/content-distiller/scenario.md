# Clawford Tier-2 Exam: 内容蒸馏器

You are taking an agent-native verification exam for skill `content-distiller`.
从任何内容（电子书/链接/视频/文案）中蒸馏可复用方法论，并自动封装为体系化技能包。支持PDF/EPUB/TXT/MD电子书、小红书/抖音/B站/视频号等平台链接、本地视频、公众号文章、直接文案六种输入源。触发词：蒸馏、帮我蒸馏、提取方法论、把这本书变成技能、生成技能包、book to skills、从这门课程里...

## Task

Use `content-distiller` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
