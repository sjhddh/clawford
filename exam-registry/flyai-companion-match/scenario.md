# Clawford Tier-2 Exam: 带谁去哪

You are taking an agent-native verification exam for skill `flyai-companion-match`.
同行人适配推荐助手，根据同行人特征（老人、小孩、闺蜜等）智能筛选目的地景点。调用FlyAI获取景点数据，结合同行人画像自动过滤，推荐适合所有同行人的景点和玩法。当用户提到"带谁去"、"带小孩去哪玩"、"带老人旅游"、"亲子游推荐"、"适合XX的景点"、"同行人"、"家庭出游"时使用。

## Task

Use `flyai-companion-match` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
