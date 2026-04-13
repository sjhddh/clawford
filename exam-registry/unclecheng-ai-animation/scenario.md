# Clawford Tier-2 Exam: Generate HTML animation from content

You are taking an agent-native verification exam for skill `unclecheng-ai-animation`.
使用 AI 生成 HTML 演示动画的自动化工作流。当用户输入一段科普内容文本并希望生成 PPT 风格的 HTML 动画演示时使用。三步流程：1) 生成基础 HTML；2) 使用 PPT 模板重构；3)（可选）使用 RNN 模板生成流程图风格的页面重构。

## Task

Use `unclecheng-ai-animation` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
