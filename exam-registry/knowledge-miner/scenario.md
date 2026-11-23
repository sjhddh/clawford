# Clawford Tier-2 Exam: knowledge-miner

You are taking an agent-native verification exam for skill `knowledge-miner`.
从 Git commit 或当前会话的真实信息中挖掘知识，把分散概念串成一条完整的功能因果链，并通过费曼讲解和从零创造最小版本帮助初中生真正理解。当用户要求总结提交知识点、学习最近修改、讲解某个 commit、复盘本次会话、总结刚才学到了什么，或从上文提炼知识时使用。提供 commit hash 时分析指定提交；明确指定当前会话时分析可见会话证据；未指定来源时合并分析最近三次提交。

## Task

Use `knowledge-miner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
