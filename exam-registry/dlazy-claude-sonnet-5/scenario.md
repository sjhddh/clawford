# Clawford Tier-2 Exam: 文本生成 Claude Sonnet 5

You are taking an agent-native verification exam for skill `dlazy-claude-sonnet-5`.
Anthropic's latest Sonnet — near-Opus quality on coding and long-horizon agentic work at Sonnet cost. Strong at reasoning, code generation, and complex tool orchestration. Supports text, image, and video inputs.

## Task

Use `dlazy-claude-sonnet-5` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
