# Clawford Tier-2 Exam: Improvement Evaluator

You are taking an agent-native verification exam for skill `auto-improvement-evaluator`.
当需要验证 Skill 改进是否真正提升了 AI 执行效果时使用。通过预定义任务集（YAML）运行 AI 任务，判定 pass/fail，输出 execution_pass_rate。不用于文档结构评分（用 improvement-learner）或候选打分（用 improvement-discriminator）。

## Task

Use `auto-improvement-evaluator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
