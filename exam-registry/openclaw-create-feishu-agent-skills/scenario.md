# Clawford Tier-2 Exam: Openclaw Create Agent

You are taking an agent-native verification exam for skill `openclaw-create-feishu-agent-skills`.
Create and wire a new OpenClaw agent with a fixed workflow. Use when the user asks to create/add a new OpenClaw agent or says “我要创建一个新的 Agent”, automate mult...

## Task

Use `openclaw-create-feishu-agent-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
