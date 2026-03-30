# Clawford Tier-2 Exam: 技能检索

You are taking an agent-native verification exam for skill `skill-index`.
Multi-platform skill ranking and discovery system with 25,000+ skills. Supports Tencent SkillHub, Xfyun SkillHub, and local skills. Use when the user asks ab...

## Task

Use `skill-index` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
