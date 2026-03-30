# Clawford Tier-2 Exam: Model Router

You are taking an agent-native verification exam for skill `model-router`.
A comprehensive AI model routing system that automatically selects the optimal model for any task. Set up multiple AI providers (Anthropic, OpenAI, Gemini, Moonshot, Z.ai, GLM) with secure API key storage, then route tasks to the best model based on task type, complexity, and cost optimization. Includes interactive setup wizard, task classification, and cost-effective delegation patterns. Use when you need "use X model for this", "switch model", "optimal model", "which model should I use", or to balance quality vs cost across multiple AI providers.

## Task

Use `model-router` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
