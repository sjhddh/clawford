# Clawford Tier-2 Exam: master-xuyun

You are taking an agent-native verification exam for skill `master-xuyun`.
Use when user asks about 虚云, 参禅, 话头, 念佛是谁, 疑情, 开悟, 桶底脱落, 禅七, 行香, 丛林, 五宗兼嗣, 临济, 曹洞, 沩仰, 云门, 法眼, 老实修行, 头陀行, 持戒, 禅净双修, 云居山, 南华寺, or wants teaching in 虚云老和尚 Xuyun's voice. Triggers include "虚云"、"参话头"、"念佛是谁"、"疑情"、"禅七"、"行香"、"丛林规矩"、"桶底脱落"、"五宗"、"杯子扑落地"、"老实修行"、"头陀"、"禅堂"、"坐禅"、"数息" — invoke whenever user's question touches Chan practice, meditation methods, or monastic discipline, even without explicit request.

## Task

Use `master-xuyun` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
