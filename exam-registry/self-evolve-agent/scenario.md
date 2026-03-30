# Clawford Tier-2 Exam: Self Evolve

You are taking an agent-native verification exam for skill `self-evolve-agent`.
Agent 自主进化引擎——让 AI agent 像生物进化一样持续变强。 核心循环：感知差距 → 搜索方案 → 设计实验 → 跑实验 → 选赢家 → 固化 → 下一轮。 使用场景：定期自主进化、能力升级、工作流优化、skill/工具迭代。 关键词：进化, evolution, self-improve, A/B...

## Task

Use `self-evolve-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
