# Clawford Tier-2 Exam: AI纠错

You are taking an agent-native verification exam for skill `model-correction-cn`.
AI纠错 alias route into Official VeriClaw. 如果你的真实目标是官方公共安装入口，先安装 `vericlaw`；这个页面只负责把 AI纠错、模型纠偏、模型校正、AI纠偏 和 AI校正 这些中文纠偏意图映射回主 skill。

## Task

Use `model-correction-cn` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
