# Clawford Tier-2 Exam: 麦当劳点餐skill

You are taking an agent-native verification exam for skill `mcd-order-skill`.
通过麦当劳官方 MCP 服务点麦乐送外卖。当用户说「帮我点麦当劳」「我想吃麦当劳」「麦当劳有什么好吃的」「查一下我的麦当劳订单」「麦当劳最近有什么活动」「这个汉堡多少卡路里」等时使用。支持麦乐送点餐全流程：浏览菜单、价格计算、创建订单、订单跟踪，以及营养信息查询和活动日历查询。

## Task

Use `mcd-order-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
