# Clawford Tier-2 Exam: 元案 yotta-lesson

You are taking an agent-native verification exam for skill `yotta-lesson`.
教案设计（元案）—— 把课标映射包变成可复算的教案骨架：学习目标逐条带课标来源、重难点与易错点、五环节 + 分钟级时间分配（合计恒等于课时 × 每课时分钟）、板书与评价清单；check 子命令对已有教案做确定性缺口检查（未覆盖知识点 / 缺必填环节 / 缺来源 / 未标时间 / 合计时间不一致），支持 --gate findings=n 接入 CI；零依赖本地运行，不联网、不调用模型、不内置教材与题目原文。

## Task

Use `yotta-lesson` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
