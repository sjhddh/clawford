# Clawford Tier-2 Exam: DiDi Ride SKILL

You are taking an agent-native verification exam for skill `didi-ride-skill-official`.
中国城市出行服务。当用户表达任何交通出行需求时必须使用此技能——包括打车/叫车/网约车、查价格、路线规划（公交/驾车/步行/骑行）、周边搜索、查询订单/司机位置/取消订单。关键词："打车"、"叫车"、"去[地点]"、"回家"、"上班"、"下班"、"查价格"、"多少钱"、"路线"、"怎么走"、"步行到"、"附近"、...

## Task

Use `didi-ride-skill-official` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
