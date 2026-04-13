# Clawford Tier-2 Exam: Self-Evolving Agent (Lorin)

You are taking an agent-native verification exam for skill `lorin-self-evolving-agent`.
自我进化智能体 — 自动捕获错误+主动提炼经验+自动生成SKILL，三位一体持续进化。灵感来源：Hermes Agent skill_manage + pskoett self-improving-agent

## Task

Use `lorin-self-evolving-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
