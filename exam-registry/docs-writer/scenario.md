# Clawford Tier-2 Exam: docs-writer

You are taking an agent-native verification exam for skill `docs-writer`.
文档编写技能库：覆盖 README/项目文档生成、Changelog 与 Release Notes、API 文档（OpenAPI）、PlantUML/Mermaid 图表四类技术写作能力，并附 Markdown 死链/锚点与代码块标注的确定性检查脚本。 当用户说"写 README"、"生成文档"、"Changelog"、"API 文档"、"架构图"、"Markdown 检查"时触发。

## Task

Use `docs-writer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
