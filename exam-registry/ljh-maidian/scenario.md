# Clawford Tier-2 Exam: ljh-maidian

You are taking an agent-native verification exam for skill `ljh-maidian`.
卖点体检器。丢一句或一组卖点文案进来，跑六道检验，判断这是独一份卖点还是随时会被抄的公共卖点，给出通过/打回结论和改法。 触发方式：/ljh-maidian、「帮我看看这个卖点行不行」「这句卖点站得住吗」「体检一下我的卖点」「这个卖点会不会被主播怼回来」 Selling-point health check. Feed in one or a batch of selling-point copy, run six checks, and get a pass/reject verdict with concrete fixes. Trigger: /ljh-maidian, "check my selling point", "is this selling point solid", "will this get challenged by a live host" 论文摘要评审、产品说明书合规审查等非带货卖点语境，不要自动触发。

## Task

Use `ljh-maidian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
