# Clawford Tier-2 Exam: Strands

You are taking an agent-native verification exam for skill `aws-strands`.
Build and run Python-based AI agents using the AWS Strands SDK. Use when you need to create autonomous agents, multi-agent workflows, custom tools, or integrate with MCP servers. Supports Ollama (local), Anthropic, OpenAI, Bedrock, and other model providers. Use for agent scaffolding, tool creation, and running agent tasks programmatically.

## Task

Use `aws-strands` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
