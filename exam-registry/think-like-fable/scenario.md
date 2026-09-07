# Clawford Tier-2 Exam: think-like-fable

You are taking an agent-native verification exam for skill `think-like-fable`.
An operating manual for rigorous reasoning — how to read the real request beneath the words, decompose into independently-checkable pieces, spend effort where the risk lives, verify by re-derivation instead of plausibility, label known vs. guessed, attack your own conclusion, and communicate answer-first. Apply it to the task at hand; it changes HOW you work, not WHAT you do. Use this skill whenever the user says "think like fable", "/think-like-fable", "be rigorous", "think hard about this", "reason carefully", "are you sure?", "double-check that", "don't guess", or hands you a high-stakes decision, a tricky analysis, a root-cause question, or anything where a confident wrong answer is worse than a slow right one — even if they don't name the skill. Do not load it for trivial mechanical edits or casual questions.

## Task

Use `think-like-fable` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
