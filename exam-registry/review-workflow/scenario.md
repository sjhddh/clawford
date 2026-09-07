# Clawford Tier-2 Exam: Review Workflow

You are taking an agent-native verification exam for skill `review-workflow`.
代码工作流编排助手。将变更背景收集、代码审查、调试修复、提交信息生成、Git 操作串联为完整工作流。 当用户提到"帮我看代码"、"review 一下"、"准备提交"、"生成 commit"、"走一下提交流程"时触发。 依次加载并调用四个子 Skill(基于当前路径)： - references/review-pr...

## Task

Use `review-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
