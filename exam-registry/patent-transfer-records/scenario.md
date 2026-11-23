# Clawford Tier-2 Exam: 专利转让查询

You are taking an agent-native verification exam for skill `patent-transfer-records`.
专利转让查询、专利转让记录、专利权人变更。当用户问「这件专利转让过吗」「从谁转给谁」「帮我整理这批专利的转让历史」时使用，输出有原始记录出处的转让时间线。 Look up disclosed patent assignment events for supplied patent numbers and create a dated ownership-change timeline with source records and unresolved fields.

## Task

Use `patent-transfer-records` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
