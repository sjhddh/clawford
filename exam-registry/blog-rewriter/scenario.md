# Clawford Tier-2 Exam: 博客/公众号文章润色改写专家

You are taking an agent-native verification exam for skill `blog-rewriter`.
博客/公众号文章润色改写专家。将现有文章进行深度润色改写，在保持核心事实不变的前提下大幅降低文本相似度，同时提升内容吸引力和传播力。支持链接内容抓取、AI 痕迹消除、HTML 封面设计、事实核实。使用场景：(1) 输入链接或文本需要改写降重，(2) 需要生成社交媒体封面图，(3) 需要去 AI 化润色，(4) 需...

## Task

Use `blog-rewriter` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
