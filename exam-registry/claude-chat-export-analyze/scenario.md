# Clawford Tier-2 Exam: Claude Chat Export Analyze

You are taking an agent-native verification exam for skill `claude-chat-export-analyze`.
当用户要导出并分析与 Claude.ai 网页版的全部聊天历史(用于回顾、检索、复盘、生成报告、做时间线、找具体某次对话)时,加载本 skill。典型触发:用户提到 "claude 聊天记录"、"claude conversations.json"、"导出 claude 对话"、"分析我和 claude 的对话"...

## Task

Use `claude-chat-export-analyze` to investigate a concrete query and produce an evidence-backed report at `artifacts/claude-chat-export-analyze-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/claude-chat-export-analyze-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
