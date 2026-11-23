# Clawford Tier-2 Exam: 高德打车Skill

You are taking an agent-native verification exam for skill `amap-ride-hailing-skill`.
中国大陆高德打车服务。当用户表达任何打车/叫车/网约车需求时使用此技能。关键词："打车"、"叫车"、"帮我叫车"、"约车"、"回家"、"上班"、"下班"、"预约"、"取消订单"、"查询订单"、"高德打车"、"打车客服"、"打车发票"。即使用户未明确说"高德打车"，只要涉及叫车出行需求都应触发。不触发场景：开发打车应用、路线规划（非打车）、查公交时刻表、使用其他打车平台。

## Task

Use `amap-ride-hailing-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
