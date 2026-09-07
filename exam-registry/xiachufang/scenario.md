# Clawford Tier-2 Exam: Xiachufang

You are taking an agent-native verification exam for skill `xiachufang`.
下厨房菜谱使用与家常烹饪助手。Use for: (1) 高效检索靠谱菜谱——按'做过'数和评分筛选、读懂用户作品反馈, (2) 把菜谱换算成购物清单与备菜时间线, (3) 新手烹饪概念解读（焯水/上浆/收汁等）与失败复盘。Xiachufang recipe-platform guide: finding reli...

## Task

Use `xiachufang` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
