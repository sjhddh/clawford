# Clawford Tier-2 Exam: 瓦匠全流程助手

You are taking an agent-native verification exam for skill `bricklayer-assistant`.
AI瓦匠全流程助手。覆盖材料计算→砂浆配比速查→报价参考→瓷砖排版→施工工艺指南→质量诊断→验收自检→安全须知8大模块。支持砌墙/抹灰/贴砖/防水/地面找平等多场景，自动计算砖块水泥砂用量，生成交互式HTML可视化报告。触发词：瓦匠,瓦工,泥瓦工,砌墙,贴砖,瓷砖,砂浆配比,水泥用量,瓷砖排版,空鼓,抹灰,防水,...

## Task

Use `bricklayer-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
