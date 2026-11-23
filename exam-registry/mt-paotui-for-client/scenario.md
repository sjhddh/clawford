# Clawford Tier-2 Exam: 美团跑腿

You are taking an agent-native verification exam for skill `mt-paotui-for-client`.
美团跑腿下单助手。支持场景：① 帮取送（A地取件送到B地，支持品类：餐饮、文件、生鲜、蛋糕、鲜花、数码、服饰、快递、五金、汽配等）② 帮买（代购商品）③ 帮取号（餐厅取号、医院挂号、其他取号）④ 帮搬装/帮扔杂物/其他帮忙（骑手到指定地址帮忙）。触发词：跑腿、下跑腿单、美团跑腿、同城配送、取号、挂号、排号、排队、帮搬、帮买、帮扔、帮忙、扔垃圾、寄文件、叫骑手、骑手帮忙、送东西、帮取、配送、帮送、买东西。

## Task

Use `mt-paotui-for-client` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
