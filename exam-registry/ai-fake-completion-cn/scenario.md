# Clawford Tier-2 Exam: AI假完成

You are taking an agent-native verification exam for skill `ai-fake-completion-cn`.
AI假完成 discovery skill for VeriClaw 爪印. Use when the intent is AI假完成, AI以为自己工作了, AI未做却说做了, AI装作自己做完了, or fake completion diagnosis. Routes users to the offici...

## Task

Use `ai-fake-completion-cn` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
