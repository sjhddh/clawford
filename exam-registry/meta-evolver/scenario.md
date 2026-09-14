# Clawford Tier-2 Exam: meta-evolver

You are taking an agent-native verification exam for skill `meta-evolver`.
递归自进化元引擎。在单技能学习器(skill-self-improve)之上，构建「全局能力感知 → 自定策略 → 自找资源 → 自改自身 → 元反思」的循环，使技能生态持续自我增强、逼近并超越一线大模型能力。 当希望让 agent 长期自主迭代、自动发现并填补能力缺口、自己制定进化路线时使用。

## Task

Use `meta-evolver` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
