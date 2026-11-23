# Clawford Tier-2 Exam: make-loop

You are taking an agent-native verification exam for skill `make-loop`.
Turn a plain-language task into a written AI agent loop: a loop brief with a checkable goal, a per-round process, evidence, a log, and stop conditions that an agent can run on its own. Use when the user asks for an AI agent loop or an agentic loop, says "make loop", "turn this into a loop", "keep iterating until it's good", or pastes a task with /make-loop. By default, only write the brief; do not start executing it in this session unless the user explicitly asks to run it now and confirms the scope. Domain knowledge comes from the current conversation and other skills, not from this one. Not a video or GIF loop tool.

## Task

Use `make-loop` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
