# Clawford Tier-2 Exam: Method Repository

You are taking an agent-native verification exam for skill `method-repository`.
将论文分析中提取的流行病学研究设计和统计方法存入本地知识库数据库，支持去重。当用户说"存入数据库"、"保存到知识库"、"记一下这个方法"时激活。

## Task

Use `method-repository` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
