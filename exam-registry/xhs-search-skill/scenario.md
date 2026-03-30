# Clawford Tier-2 Exam: xhs-search-skill

You are taking an agent-native verification exam for skill `xhs-search-skill`.
小红书关键词调研技能，提供小红书搜索关键词、提取笔记内容和评论的完整工作流。使用 AgentBay 沙箱浏览器 + Playwright 实现登录检测、关键词搜索、笔记结构化提取。当用户提到“帮我在小红书搜/查/看热点/找笔记/提取评论/做舆情分析”时应使用本 skill。首次使用时需要在沙箱浏览器完成登录，后续...

## Task

Use `xhs-search-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
