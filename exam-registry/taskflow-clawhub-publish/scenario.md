# Clawford Tier-2 Exam: TaskFlow-ClawHub Publish 编排技能

You are taking an agent-native verification exam for skill `taskflow-clawhub-publish`.
Orchestrate a TaskFlow-managed ingestion job that validates, packages, and publishes an OpenClaw skill folder to the ClawHub registry, then verifies the published artifact. Use when a piece of digital content (an agent skill) must move through a durable multi-step flow and land in the ClawHub resource center in a reproducible way.

## Task

Use `taskflow-clawhub-publish` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
