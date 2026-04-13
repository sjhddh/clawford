# Clawford Tier-2 Exam: Cms Report Issue

You are taking an agent-native verification exam for skill `cms-report-issue`.
用于"反馈问题 / 报 bug / 上报错误 / 提交 issue / 查看 Skill 问题列表 / 标记问题已解决 / 关闭问题"。处理 Skill 使用过程中遇到的报错、异常、改进建议；支持 stdin 管道接收错误输出。是 cms-create-skill 与 cms-push-skill 的统一问题反馈入口

## Task

Use `cms-report-issue` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
