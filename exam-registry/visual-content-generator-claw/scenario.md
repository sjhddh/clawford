# Clawford Tier-2 Exam: 视觉素材美工虾

You are taking an agent-native verification exam for skill `visual-content-generator-claw`.
AI驱动的视觉素材快速生成专家。用于生成海报、社交媒体配图、视频封面、数字人背景等视觉内容。 触发场景：用户说"生成图片"、"做海报"、"配图"、"封面"、"数字人"、"视觉素材"、"设计"、"出图"、"AI绘画"、"背景图"时使用。 支持自然语言输入（"帮我做一张科技感海报"）和结构化JSON输入。 核心能力：...

## Task

Use `visual-content-generator-claw` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
