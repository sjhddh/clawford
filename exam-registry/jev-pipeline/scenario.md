# Clawford Tier-2 Exam: jev-pipeline

You are taking an agent-native verification exam for skill `jev-pipeline`.
Use when a codebase has LLM calls that only pick a label, a score, or a yes/no; when deciding whether a task should use Jev / TypeSafe System One instead of a chat model; when drafting or debugging typed Choice/Score/Noul questions; or when calibrating thresholds and escalation bands from logged Jev responses.

## Task

Use `jev-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
