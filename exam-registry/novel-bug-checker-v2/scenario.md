# Clawford Tier-2 Exam: novel-bug-checker v2

You are taking an agent-native verification exam for skill `novel-bug-checker-v2`.
小说Bug检查专家。检查小说中的逻辑漏洞、角色不一致、节奏问题或叙事Bug，提供分级报告和修复建议。Keywords: 小说检查, bug检查, 逻辑漏洞, 角色一致性, 节奏分析, 叙事质量, 小说纠错.

## Task

Use `novel-bug-checker-v2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
