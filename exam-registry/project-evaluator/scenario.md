# Clawford Tier-2 Exam: AI 项目评估助手

You are taking an agent-native verification exam for skill `project-evaluator`.
描述一个项目想法，AI 从市场/技术/商业/风险四个维度系统评估， 输出评估报告、竞品速查、MVP建议，帮你决策「值不值得做」。

## Task

Use `project-evaluator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
