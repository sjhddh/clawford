# Clawford Tier-2 Exam: Ai Shopping Assistant

You are taking an agent-native verification exam for skill `ai-shopping-assistant-skill`.
AI购物助手，用于用户选商品、比较品牌型号、核实真实到手价、分析购买渠道、店铺主体、售后条款、评论可信度与交易风险。适合“我不知道买什么”“帮我比较几个商品”“哪里买更合适”“这个店靠谱吗”“优惠后到底多少钱”等购买前决策任务。内置 Python 引擎可完成需求状态更新、候选匹配、优惠计算、评论证据整理、商家证据分析与来源质量评估；只提供可验证的购物参考，不替用户提交订单或付款。

## Task

Use `ai-shopping-assistant-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
