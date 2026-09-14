# Clawford Tier-2 Exam: zhuanzhuan

You are taking an agent-native verification exam for skill `zhuanzhuan`.
转转二手助手。用户想买个二手、想把闲置卖掉换钱、想知道旧物值多少钱或什么时候卖更划算、想知道这东西二手现在什么价、想找同款好价时使用。覆盖 iPhone/华为/小米等手机、笔记本平板等数码、LV/Gucci 与劳力士等奢品包表、球鞋盲盒等兴趣好物，以及特斯拉/比亚迪等二手车。价格、成交行情、回收估价、订单物流等具体数据需 MCP 接入后提供。

## Task

Use `zhuanzhuan` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
