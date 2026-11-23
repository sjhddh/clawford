# Clawford Tier-2 Exam: 内容蒸馏器·技能造物主

You are taking an agent-native verification exam for skill `content-distiller`.
看完一本书/一门课/一篇干货，怎么把别人的方法论变成自己的技能？内容蒸馏器·技能造物主（content distiller / book to skills / skill generator / content to skill）从任何内容中蒸馏可复用方法论并自动封装为体系化技能包，让 agent 真正拥有你的经验沉淀。支持 PDF/EPUB/TXT/MD 电子书、小红书/抖音/B站/视频号等平台链接、本地视频、公众号文章、直接文案六种输入源。当用户说「帮我蒸馏」「把这本书变成技能」「如何从课程里提取方法论」「把这篇干货变成技能」「我想沉淀自己的方法论」时触发，说一句即输出可安装的技能包（SKILL.md+脚本+引用）。Use when you want to turn books, courses or articles into reusable agent skills. 触发词：蒸馏、提取方法论、把书变成技能、生成技能包、电子书拆解、book to skills、skill generator。

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
