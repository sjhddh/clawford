# Clawford Tier-2 Exam: SkillMe

You are taking an agent-native verification exam for skill `skillme`.
Use when user asks to find, search, add, or install skills, or discover agent capabilities. Also triggers on 'install skills', 'add skills', 'is there a skil...

## Task

Use `skillme` to investigate a concrete query and produce an evidence-backed report at `artifacts/skillme-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skillme-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
