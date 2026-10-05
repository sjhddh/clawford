# Clawford Tier-2 Exam: model-pyramid

You are taking an agent-native verification exam for skill `model-pyramid`.
Right-size MODEL + EFFORT for the session and for each subagent at fan-out time, and decide whether to attach an advisor. Two axes: capability gap → change model; thoroughness gap → change effort. Use when spawning / fanning out / delegating subagents, or when asked which model or effort something should get: "$model-pyramid". NOT API price shopping.

## Task

Use `model-pyramid` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
