# Clawford Tier-2 Exam: Investigation First

You are taking an agent-native verification exam for skill `investigation-first`.
触发：当你准备下判断、做决策或提出建议，但事实、上下文或一手信息还不充分时优先调用；常见信号包括 unknowns、信息缺口、证据不足、领域陌生、需要先摸清现状。 English: Trigger before making claims or decisions when context is incomple...

## Task

Use `investigation-first` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
