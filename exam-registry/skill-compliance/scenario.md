# Clawford Tier-2 Exam: Skill Compliance

You are taking an agent-native verification exam for skill `skill-compliance`.
Skill上架合规检查器（面向国内平台）。在上传前检查skill是否符合国内监管要求，包括金融敏感词、免责声明、安全红线等。

## Task

Use `skill-compliance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
