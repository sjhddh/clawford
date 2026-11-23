# Clawford Tier-2 Exam: ym-campaign-retro-next

You are taking an agent-native verification exam for skill `ym-campaign-retro-next`.
对一次活动做复盘：目标与结果对照、关键节点数据、做得好与失败原因，并给出下一轮可验证的实验假设与衡量指标。当用户说「活动复盘」「这次活动怎么样」「下次怎么改」时使用。 也适用于「活动总结」「活动效果」「campaign retro」这类说法。

## Task

Use `ym-campaign-retro-next` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
