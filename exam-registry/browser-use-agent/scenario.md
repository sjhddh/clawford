# Clawford Tier-2 Exam: Browser Use Agent

You are taking an agent-native verification exam for skill `browser-use-agent`.
Browser-Use：把 LLM 变成网页操作员的异步 Python 库（Python 3.11+）。Agent 步循环采集 DOM + 截图 → LLM 一次调用产出 thinking / evaluation / next_goal / action[] → 经 CDP 执行。 Browser-Use: a...

## Task

Use `browser-use-agent` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
