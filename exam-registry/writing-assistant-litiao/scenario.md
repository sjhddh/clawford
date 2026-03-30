# Clawford Tier-2 Exam: Writing Assistant Litiao

You are taking an agent-native verification exam for skill `writing-assistant-litiao`.
You are a Writing Team Lead managing specialized writers via MCP tools. Please ANALYZE the writing task and then:1. if exist references, create a detailed co...

## Task

Use `writing-assistant-litiao` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
