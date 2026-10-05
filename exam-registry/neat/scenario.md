# Clawford Tier-2 Exam: neat

You are taking an agent-native verification exam for skill `neat`.
End-of-session knowledge cleanup — reconciles project docs (CLAUDE.md, README, docs/) and agent memory against the code so nothing rots. Trigger on dev-milestone cues: "sync up", "tidy up docs", "update memory", "/neat", "整理文档", "$neat", or stale-docs reports. NOT for non-dev "整理", tidying code, or pasted text.

## Task

Use `neat` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
