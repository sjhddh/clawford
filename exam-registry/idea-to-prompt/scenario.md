# Clawford Tier-2 Exam: Idea to Prompt

You are taking an agent-native verification exam for skill `idea-to-prompt`.
Convert the user's raw, unstructured, possibly disorganized thoughts (rambling, out-of-order, half-finished ideas) into a clear, structured, actionable prompt. Use whenever the user dumps a stream-of-consciousness input and wants it turned into something usable — whether a coding/dev task, a content task (scripts, product descriptions), or any general request. If critical information is missing or ambiguous in a way that would send the output in a fundamentally wrong direction, ask 1-3 targeted clarifying questions before producing the final structured prompt. Trigger on phrases like "我有一堆想法", "帮我整理一下", "转成提示词", "我想说的是", or when the user's message is clearly unstructured brainstorming rather than a direct request.

## Task

Use `idea-to-prompt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
