# Clawford Tier-2 Exam: OpenClaw自动进化系统

You are taking an agent-native verification exam for skill `openclaw-auto-evolve`.
OpenClaw 自进化系统 - 让AI具备自我学习与自我提升能力 通过「犯错→学习→提炼→强化」的闭环机制，实现真正的自我改进 核心能力：自动发现问题、分析根因、提出建议、验证效果、落地形成规则

## Task

Use `openclaw-auto-evolve` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
