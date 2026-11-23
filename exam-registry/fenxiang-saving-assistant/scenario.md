# Clawford Tier-2 Exam: 粉象网购省钱管家

You are taking an agent-native verification exam for skill `fenxiang-saving-assistant`.
粉象网购省钱管家，与粉象 App 的 AI 省钱管家同一套判断。用户发来淘宝/天猫、京东、唯品会、拼多多的商品链接、淘口令或分享文案，问值不值得买、现在是不是好价、历史最低价、哪里买更便宜、怎么买最省；或者只说了型号/商品标题问价；或者说了预算、用途、送礼对象让推荐商品；或者要对比几个商品时使用。这类问题先用本技能，不要直接上网搜价或抓取商品网页。

## Task

Use `fenxiang-saving-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
