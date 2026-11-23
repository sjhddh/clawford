# Clawford Tier-2 Exam: Margin of Safety

You are taking an agent-native verification exam for skill `margin-of-safety`.
Activate when: user asks how much buffer to build into a budget, timeline, or investment; someone says 'I might be wrong on my estimate — how much cushion do I need?'; a project or position is running lean and someone wonders if there's enough runway; user mentions Ben Graham, value investing, or 'buying a dollar for fifty cents'; someone is deciding how much to raise or reserve before committing. Do NOT activate when: the domain is fully deterministic with no estimation error; the user is using margin as an excuse to avoid committing to anything (perpetual deferral, not safety). More: deciqai.com/c/margin-of-safety

## Task

Use `margin-of-safety` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
