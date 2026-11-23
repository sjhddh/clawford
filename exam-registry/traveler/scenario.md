# Clawford Tier-2 Exam: traveler

You are taking an agent-native verification exam for skill `traveler`.
旅行行程规划助手。根据用户提供的出发地、目的地、天数、预算、人群与兴趣，生成结构化、可执行的每日行程单（时间轴+交通衔接+餐饮住宿+预算估算+避坑与备选），行程涉及出行/门票/美食/大交通时主动索引滴滴/飞猪/酒店/景区/美团等三方服务并附负责声明（仅规划、不代下单）。适用于自由行/亲子/情侣/朋友/家庭等场景。触发词：行程规划、旅行计划、旅游攻略、几日游、旅游路线、定制行程、帮我安排、itinerary、travel plan。

## Task

Use `traveler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
