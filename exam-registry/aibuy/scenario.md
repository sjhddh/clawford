# Clawford Tier-2 Exam: Aibuy

You are taking an agent-native verification exam for skill `aibuy`.
AIBuy 水贝珠宝行情助手，面向深圳水贝批发市场的一手货源查询。 覆盖三类能力： 1. 水贝珠宝产品查询：当用户询问珠宝商品、想查看或比较货源、提到任何珠宝品类 （黄金、K金、翡翠、钻石、手镯、戒指、项链、耳饰、彩宝等）、询问价格或 想浏览批发行情时触发。即使用户表达随意也应触发，例如"有没有18K的"、 "看...

## Task

Use `aibuy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
