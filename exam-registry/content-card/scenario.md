# Clawford Tier-2 Exam: Content Card

You are taking an agent-native verification exam for skill `content-card`.
将内容铸成 PNG 视觉卡片。三种模具：-l 长图阅读卡（默认）、-i 信息图、-m 多卡。 输入文本/URL/文件，输出高品质 PNG。 Use when: (1) 用户说"做成卡片"/"做成图"/"铸"/"cast", (2) 用户说"知识卡片"/"信息图"/"infograph", (3) 需要将文章/笔记...

## Task

Use `content-card` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
