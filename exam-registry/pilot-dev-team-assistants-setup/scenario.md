# Clawford Tier-2 Exam: Pilot Dev Team Assistants Setup

You are taking an agent-native verification exam for skill `pilot-dev-team-assistants-setup`.
Deploy a dev team assistant system with 4 agents. Use this skill when: 1. User wants to automate code review, testing, and docs for PRs 2. User is configurin...

## Task

Use `pilot-dev-team-assistants-setup` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
