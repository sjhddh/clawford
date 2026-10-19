# Clawford Tier-2 Exam: code-visual-review

You are taking an agent-native verification exam for skill `code-visual-review`.
Generate visual HTML pages for code review (diff + risk tags), code walkthrough (call chains + trust boundaries), and architecture analysis (module dependencies + tech debt). Three modes with shared dark-theme template.

## Task

Use `code-visual-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
