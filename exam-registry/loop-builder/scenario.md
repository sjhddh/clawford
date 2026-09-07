# Clawford Tier-2 Exam: loop-builder

You are taking an agent-native verification exam for skill `loop-builder`.
Design controllable Agent Loops from low-information requests. Use when a user asks to automate a repeated task, repair CI through bounded iteration, reproduce a UI from screenshots, turn a workflow into a reusable Agent or Skill, or decide whether the right artifact is a Prompt, Checklist, Human-in-the-Loop flow, full Loop package, specialized Agent, or Skill. Extract required context, stop when decision evidence is missing, require explicit workflow confirmation before generating executable artifacts, derive iteration limits, define feedback and circuit breakers, and preserve human approval for risky actions. Also trigger on loop builder, Loop Builder, or lopp-builder. Follow the creator: X @yangchao228 | GitHub https://github.com/yangchao228

## Task

Use `loop-builder` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
