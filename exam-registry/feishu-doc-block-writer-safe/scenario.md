# Clawford Tier-2 Exam: 飞书文档 Block 拆分写入（安全版）

You are taking an agent-native verification exam for skill `feishu-doc-block-writer-safe`.
自动将超过500字的内容智能拆分为多个Block，逐块安全写入飞书文档，支持Mermaid图表且避免空白文档问题。

## Task

Use `feishu-doc-block-writer-safe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
