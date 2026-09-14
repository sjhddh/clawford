# Clawford Tier-2 Exam: Release Proof Builder

You are taking an agent-native verification exam for skill `release-proof-builder`.
Build verifiable proof that a ClawHub release is live and installable. 在发布后核验 GitHub、Actions、registry、公开元数据和安装结果，避免把推送成功误当成上架成功。

## Task

Use `release-proof-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
