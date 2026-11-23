# Clawford Tier-2 Exam: 投标资料核验与组包

You are taking an agent-native verification exam for skill `bid-document-checker`.
使用场景: 用户要求整理投标资格与商务附件、逐条核对原文要求、复用企业资料并生成资料包时。

## Task

Use `bid-document-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
