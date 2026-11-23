# Clawford Tier-2 Exam: PyAI Phone Calls

You are taking an agent-native verification exam for skill `pyai-calling`.
Make user-approved phone calls with the PyAI CLI, check call status, and retrieve available summaries or transcripts. Use when the user explicitly asks to call someone through their PyAI project. Requires PyAI CLI, account access, calling permissions, an owned number and credits.

## Task

Use `pyai-calling` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
