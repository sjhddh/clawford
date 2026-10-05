# Clawford Tier-2 Exam: Llm Agent

You are taking an agent-native verification exam for skill `llm-agent`.
Build a chat, reasoning, or tool-calling agent on top of Runware-hosted LLMs. Use when the user says "make an agent that can call my functions", "let the mod...

## Task

Use `llm-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
