# Clawford Tier-2 Exam: skill-security-scan

You are taking an agent-native verification exam for skill `skill-security-scan`.
Skill安全扫描工具。L1自动化扫描（scanner.py）+ L2人工审查协议（红旗清单+风险分级）。发现风险时推送信息交给人工复核。

## Task

Use `skill-security-scan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
