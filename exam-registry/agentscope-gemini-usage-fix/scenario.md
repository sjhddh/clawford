# Clawford Tier-2 Exam: agentscope-gemini-usage-fix

You are taking an agent-native verification exam for skill `agentscope-gemini-usage-fix`.
Work around a Gemini usage normalization bug in AgentScope where cached_content_token_count=None causes Usage validation to fail. Use this whenever the user uses GeminiChatModel and sees ValidationError on cache_input_tokens.

## Task

Use `agentscope-gemini-usage-fix` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
