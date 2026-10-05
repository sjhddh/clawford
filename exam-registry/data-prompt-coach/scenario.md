# Clawford Tier-2 Exam: Data Prompt Coach 数据分析Prompt引导教练

You are taking an agent-native verification exam for skill `data-prompt-coach`.
数据分析 Prompt 引导教练+教程蒸馏自进化。触发『启动数据分析』『CRISP-DM』『我有 CSV 想端到端分析』『蒸馏教程』→双入口（8 场景+26 方法论+自修改预审+回滚）。Do NOT use for 直接接入生产数据库、ML 建模、纯摘要。

## Task

Use `data-prompt-coach` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
