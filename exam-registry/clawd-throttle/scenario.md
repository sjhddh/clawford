# Clawford Tier-2 Exam: Clawd Throttle

You are taking an agent-native verification exam for skill `clawd-throttle`.
Routes LLM requests to the cheapest capable model across 8 providers (Anthropic, Google, OpenAI, DeepSeek, xAI, Moonshot, Mistral, Ollama) and 25+ models. Scores prompts on 8 dimensions in under 1ms, supports three routing modes (eco, standard, gigachad), and logs all decisions for cost tracking.

## Task

Use `clawd-throttle` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
