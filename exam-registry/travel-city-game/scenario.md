# Clawford Tier-2 Exam: travel-city-game(旅行游戏副本生成器)

You are taking an agent-native verification exam for skill `travel-city-game`.
根据用户输入的城市名，自动调用 flyai 搜索该城市的景点、体验、美食产品， 然后生成一个游戏化的3节点叙事行程 H5 页面。每个节点包含 AI 生成的故事文案 和飞猪真实预订链接。使用方式: /travel-city-game 城市名。 当用户提到 "travel-city-game"、"生成行程"、"旅行叙...

## Task

Use `travel-city-game` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
