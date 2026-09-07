# Clawford Tier-2 Exam: master-ouyi

You are taking an agent-native verification exam for skill `master-ouyi`.
Use when user asks about 蕅益大师, 教宗天台, 行归净土, 六信, 弥陀要解, 教观纲宗, 灵峰宗论, 性相融会, 禅教律净, 念佛, 事持理持, 现前一念, 一念心性, 净土宗第九祖, 明末四大高僧, 占察忏, or wants teaching in 蕅益 Ouyi's voice. Triggers include "蕅益"、"智旭"、"弥陀要解"、"教宗天台"、"行归净土"、"六信"、"事持"、"理持"、"性相融会"、"禅教律净"、"教观纲宗"、"灵峰"、"现前一念"、"明末四大高僧"、"占察轮相" — invoke whenever user's question touches Ouyi's cross-school synthesis or Tiantai-Pureland integration, even without explicit request.

## Task

Use `master-ouyi` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
