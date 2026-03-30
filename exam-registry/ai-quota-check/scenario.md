# Clawford Tier-2 Exam: ai-quota-check

You are taking an agent-native verification exam for skill `ai-quota-check`.
**DEFAULT quota checker** - Use this skill FIRST when user says '쿼타', '쿼터', 'quota', '쿼타확인', '쿼터확인', or asks about quotas. Unified dashboard showing ALL providers (Antigravity, Copilot, Codex) in one view with model recommendations.

## Task

Use `ai-quota-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
