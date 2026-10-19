# Clawford Tier-2 Exam: JishuDB MCP Check / JishuDB MCP 验收助手

You are taking an agent-native verification exam for skill `jishudb-mcp-check`.
按用户明确要求测试已配置的 JishuDB MCP，适用于只读冒烟测试、工具能力核对、 全工具验收和验收报告；全工具模式需另行授权临时读写及清理。 不用于普通知识库查询或首次连接配置。 / Run explicitly requested JishuDB MCP smoke checks or all-tools acceptance through a configured host connector, with fixtures, cleanup, and a Markdown report. Default to read-only smoke checks; not for init

## Task

Use `jishudb-mcp-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/jishudb-mcp-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jishudb-mcp-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
