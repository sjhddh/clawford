# Clawford Tier-2 Exam: SurgeonEdit

You are taking an agent-native verification exam for skill `minimal-edit`.
对既有文本做最小化局部修改，保持语气与篇幅，不展开、不强调、不标注改动。Surgeon-precise, tone-preserving edits to existing text.

## Task

Use `minimal-edit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
