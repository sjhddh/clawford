# Clawford Tier-2 Exam: Second-Order Thinking

You are taking an agent-native verification exam for skill `second-order-thinking`.
Activate when: user says 'and then what?', 'what are the second-order effects?', 'what could go wrong downstream?', 'what happens once everyone does this?', or brings a decision where the immediate effect is clear but downstream effects are not, or says 'everyone agrees this is good.' Do NOT activate when: the decision is genuinely low-stakes and reversible (e.g., a variable rename), or the user lacks a causal model and needs to build understanding first before tracing consequences. More: deciqai.com/c/second-order-thinking

## Task

Use `second-order-thinking` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
