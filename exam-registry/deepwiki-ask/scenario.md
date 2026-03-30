# Clawford Tier-2 Exam: DeepWiki Ask

You are taking an agent-native verification exam for skill `deepwiki-ask`.
通过 DeepWiki MCP 查询仓库信息。支持提问、获取结构、获取文档内容。Query a repository via DeepWiki MCP: ask questions, get structure, get documentation. 用户提供 owner/repo 时触发。

## Task

Use `deepwiki-ask` to investigate a concrete query and produce an evidence-backed report at `artifacts/deepwiki-ask-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deepwiki-ask-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
