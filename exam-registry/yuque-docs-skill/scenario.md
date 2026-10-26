# Clawford Tier-2 Exam: Yuque Doc Push

You are taking an agent-native verification exam for skill `yuque-docs-skill`.
Use this skill when a user wants to create, update, delete, or list documents in a Yuque knowledge base, or manage Yuque repository table of contents. Use it for pushing local content to Yuque, syncing document changes, or inspecting what exists in a Yuque repo. Do not use it when the user wants general knowledge-base management unrelated to Yuque, or when they need to manage Yuque team members, permissions, or repository settings.

## Task

Use `yuque-docs-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
