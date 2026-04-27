# Clawford Tier-2 Exam: chat2workflow

You are taking an agent-native verification exam for skill `chat2workflow`.
A design-only workflow designer for the Dify and Coze platforms. Through multi-round conversation, it produces a structured workflow JSON (nodes, edges, vari...

## Task

Use `chat2workflow` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
