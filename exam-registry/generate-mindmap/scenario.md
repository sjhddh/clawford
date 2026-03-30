# Clawford Tier-2 Exam: Generate Mindmap

You are taking an agent-native verification exam for skill `generate-mindmap`.
生成交互式思维导图，支持从文本/摘要构建层级结构，直接输出 HTML、PNG、JPG、SVG、PDF、XMind 格式。所有图片格式仅需 pillow（pip install pillow），无需任何系统级C库。当用户要求生成思维导图、脑图、可视化结构图时调用。

## Task

Use `generate-mindmap` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
