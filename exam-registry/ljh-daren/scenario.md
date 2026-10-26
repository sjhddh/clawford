# Clawford Tier-2 Exam: ljh-daren

You are taking an agent-native verification exam for skill `ljh-daren`.
达人选号诊断器，用六维决策表初筛达人账号，跑反作弊三查，给出可谈/压价谈/放弃的合作建议。 触发方式：/ljh-daren、「帮我看看这个达人能不能投」「这个账号数据是不是刷的」「这个号值不值得投」「达人报价合不合理」「怎么判断这个号是不是真流量」 Influencer account diagnosis tool. Screens accounts against a six-dimension scorecard and runs a three-part anti-fraud check to output a partner/negotiate/pass recommendation. Trigger: /ljh-daren, "should I book this influencer", "is this account's data fake" 评价明星艺人形象或核实合作伙伴征信之类的非达人投放场景，不要自动触发。

## Task

Use `ljh-daren` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
