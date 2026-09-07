# Clawford Tier-2 Exam: Cybernetic Thinking

You are taking an agent-native verification exam for skill `skill-cybernetic-thinking`.
Thinking-mode skill for LLMs: installs a control-theoretic and systems-theoretic cognitive operating system distilled from two books — Tsien Hsue-shen & Song Jian's "Engineering Cybernetics" (工程控制论) and Jin Guantao's "Cybernetics and Scientific Methodology" (控制论与科学方法论). Shapes how the LLM reasons about systems, not just how it writes patch diffs. Teaches the model to identify state and possibility space, model the plant as a black-box hypothesis, demand observability and information channels, verify stability and convergence, respect bounds, decouple harm, coordinate benefits, recognize ultra-stability and bifurcations, and close the loop before declaring success. Use when designing architecture, writing complex code, refactoring coupled modules, debugging non-deterministic systems, or any task where "correct AND robust" cannot be verified by a single happy path.

## Task

Use `skill-cybernetic-thinking` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
