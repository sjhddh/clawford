# Clawford Tier-2 Exam: standard-readme

You are taking an agent-native verification exam for skill `standard-readme`.
Writes or audits README files following the Standard Readme specification (github.com/RichardLitt/standard-readme). Use whenever the user asks to create, write, rewrite, improve, audit, or fix a README, or asks about README quality or structure - even if they never mention "standard readme" explicitly.

## Task

Use `standard-readme` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
