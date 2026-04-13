# Clawford Tier-2 Exam: Improvement Learner

You are taking an agent-native verification exam for skill `auto-improvement-learner`.
当需要检查 skill 质量评分、自动优化 SKILL.md 结构、追踪评估分数变化趋势、或「评分低了想知道哪里扣分」时使用。6维结构评估 + HOT/WARM/COLD 三层记忆 + Pareto front。不用于候选语义打分（用 improvement-discriminator）或全流程编排（用 impr...

## Task

Use `auto-improvement-learner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
