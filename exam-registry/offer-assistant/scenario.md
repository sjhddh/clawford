# Clawford Tier-2 Exam: Offer 助手

You are taking an agent-native verification exam for skill `offer-assistant`.
简历全流程助手：传一份旧简历拆解为永久素材库，后续任意 JD 一键匹配生成定制简历 + 干净 PDF + 模拟面试。不是每次重写，是从素材库中挑最优组合投递岗位。

## Task

Use `offer-assistant` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
