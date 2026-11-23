# Clawford Tier-2 Exam: prompt-optimizer

You are taking an agent-native verification exam for skill `mega-prompt-optimizer`.
Transform vague user requests into precise, high-quality prompts. Two engines: template matching (3300+ library) + LLM meta-prompting (host AI as optimizer). Only activates when the user explicitly turns it on.

## Task

Use `mega-prompt-optimizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
