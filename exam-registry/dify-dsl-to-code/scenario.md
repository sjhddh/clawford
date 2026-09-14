# Clawford Tier-2 Exam: dify-dsl-to-code

You are taking an agent-native verification exam for skill `dify-dsl-to-code`.
将 Dify 导出的工作流/Chatflow DSL 文件（YAML）转化为可部署、可运行的独立代码项目（默认 Python+FastAPI，可选 Node.js+Express）。当用户要求"Dify 工作流转代码"、"DSL 导出转项目"、"把 Dify 应用代码化"、"脱离 Dify 部署工作流"时使用。

## Task

Use `dify-dsl-to-code` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
