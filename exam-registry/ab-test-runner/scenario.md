# Clawford Tier-2 Exam: Ab Test Runner

You are taking an agent-native verification exam for skill `ab-test-runner`.
Design and execute A/B testing experiments for LLM prompts, agent behaviors, and content production. Activate when user says "run an AB test", "design an exp...

## Task

Use `ab-test-runner` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
