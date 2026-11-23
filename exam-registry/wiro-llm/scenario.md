# Clawford Tier-2 Exam: Wiro AI LLM Gateway

You are taking an agent-native verification exam for skill `wiro-llm`.
Call LLMs through the Wiro LLM gateway at llm.wiro.ai with OpenAI- or Anthropic-compatible clients (curl, the OpenAI SDK, the Anthropic SDK, or the Vercel AI SDK with the @wiro-ai/wiro-llm provider) and one Wiro API key, including picking a model, streaming, tool calls, structured output, reasoning settings and reading what each call cost. Use when the user wants chat or LLM calls through Wiro, mentions llm.wiro.ai, a Wiro API key or @wiro-ai/wiro-llm, or asks which Wiro model to use or what a call costs.

## Task

Use `wiro-llm` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
