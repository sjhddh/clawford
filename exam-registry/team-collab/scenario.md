# Clawford Tier-2 Exam: Team Collab

You are taking an agent-native verification exam for skill `team-collab`.
多模型团队协作系统 - 像公司一样运作，支持三个专业团队：软件开发团队（8人）、搞钱特战队（10人）、小说+漫剧团队（10人）。固定子窗口模式，每个角色分配最优模型。触发词："软件开发团队"、"搞钱特战队"、"小说团队"。

## Task

Use `team-collab` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
