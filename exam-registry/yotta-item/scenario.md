# Clawford Tier-2 Exam: 元题 yotta-item

You are taking an agent-native verification exam for skill `yotta-item`.
命题组卷（元题）—— 按双向细目表从本地题库确定性选题组卷：先保证必考考点覆盖，再按难度配额补足，固定 seed 可复算（题库不足时报缺口，不用编造的题顶替）；check 子命令对已有试卷做确定性缺口检查（未知题 / 重复题 / 总分偏差 / 分节题量与分值偏差 / 难度分布漂移 / 考点缺失 / 超出限时），支持 --gate findings=n 接入 CI；零依赖本地运行，不联网、不调用模型、不生成或改写题面、不内置题目与教材原文。

## Task

Use `yotta-item` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
