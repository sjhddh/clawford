# Clawford Tier-2 Exam: AI 写作诊断

You are taking an agent-native verification exam for skill `cell-ai-writing-diagnosis`.
AI-writing fingerprint diagnosis for Chinese text. Use when Codex needs to inspect a draft for overly smooth, formulaic, generic, or authorless writing patte...

## Task

Use `cell-ai-writing-diagnosis` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
