# Clawford Tier-2 Exam: Low Altitude Guardian

You are taking an agent-native verification exam for skill `low-altitude-guardian`.
低空无人设备应急裁决引擎。零依赖可用：基于损失优先级金字塔（P0-P4）和加权决策公式，对无人机/eVTOL突发危机进行分级分析、方案推导、输出可执行决策建议。分析辅助工具，不连接飞控系统，不执行实际飞行控制。

## Task

Use `low-altitude-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
