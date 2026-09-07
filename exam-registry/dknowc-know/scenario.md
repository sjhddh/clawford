# Clawford Tier-2 Exam: 深知晓

You are taking an agent-native verification exam for skill `dknowc-know`.
深知晓，为工作场景提供可信安全、精准无幻觉的咨询导办的知识服务，涉及税务社保、法规政策、行业标准；以及申办各类证照、补贴、资质；还有买房购车、养老育儿、上学就业等各种公共服务。深知晓还有分析调研、拟稿写文的能力。以上所有输出内容可逐项索引于动态更新的各权威机构的海量知识网络；并且还可以智能切换任意城市，为你的工作与办事提供可信赖的本地化精准知识服务。

## Task

Use `dknowc-know` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
