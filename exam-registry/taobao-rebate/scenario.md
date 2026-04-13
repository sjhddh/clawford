# Clawford Tier-2 Exam: 淘宝返利

You are taking an agent-native verification exam for skill `taobao-rebate`.
返利宝统一技能。只按 3 个用户场景工作：S01 授权与教程、S02 链接返利、S03 商品搜索。用户说“返利”“教程”“详细教程”“提现教程”“提现10元”“确认提现”“我已授权”“账户余额”等走 S01；发送淘宝、京东、拼多多商品链接走 S02；表达想买什么商品时走 S03。S03 的职责是提取商品搜索信息，...

## Task

Use `taobao-rebate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
