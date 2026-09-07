# Clawford Tier-2 Exam: Blog Auto Poster Skill

You are taking an agent-native verification exam for skill `blog-auto-poster-skill`.
多平台文章统一发布与同步工具。支持 CSDN、51CTO、博客园、掘金四个平台。 触发场景：用户需要将文章、博客、Markdown 文件的内容分发或群发到指定平台。 典型指令如：“帮我把这段文字发布到所有平台”、“把这个 MD 文件同步到 CSDN”、“一键群发这篇博客”。

## Task

Use `blog-auto-poster-skill` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
