# Clawford Tier-2 Exam: skill-collision-guard

You are taking an agent-native verification exam for skill `skill-collision-guard`.
Use only when the user explicitly asks to inspect or compare coding-agent skills before installation or invocation. The workflow uses bounded local discovery, optional read-only Git candidate retrieval, deterministic comparison of names, capabilities, policies, and behavior, and reversible session suppression; it reads SKILL.md files only, never executes candidate code or installs/removes skills, and leaves conflict decisions with the user.

## Task

Use `skill-collision-guard` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-collision-guard-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-collision-guard-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
