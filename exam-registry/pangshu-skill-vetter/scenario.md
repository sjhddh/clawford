# Clawford Tier-2 Exam: 胖叔 Skill 安全审查

You are taking an agent-native verification exam for skill `pangshu-skill-vetter`.
Security vetting for agent skills before installation. Scans skill code for dangerous Bash commands, sensitive file access, network exfiltration, obfuscated...

## Task

Use `pangshu-skill-vetter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
