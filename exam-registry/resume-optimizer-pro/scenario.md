# Clawford Tier-2 Exam: resume-optimizers

You are taking an agent-native verification exam for skill `resume-optimizer-pro`.
评估并优化简历内容，输出精美的 HTML 修改建议报告。当用户提到"修改简历"、"优化简历"、"简历评估"时使用。支持前端和后端岗位，Claude 以前端/后端架构师视角进行评估，让用户清楚知道哪些部分需要优化。

## Task

Use `resume-optimizer-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
