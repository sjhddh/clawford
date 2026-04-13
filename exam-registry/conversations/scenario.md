# Clawford Tier-2 Exam: conversations

You are taking an agent-native verification exam for skill `conversations`.
从 OpenClaw sessions/*.jsonl 导入对话历史到本地 SQLite，配合 FTS5 全文搜索。成为真正的记忆库，支持语义化查询历史对话，让整理和回顾更高效。装好后跑一次 import，之后随时可以 query。

## Task

Use `conversations` to investigate a concrete query and produce an evidence-backed report at `artifacts/conversations-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/conversations-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
