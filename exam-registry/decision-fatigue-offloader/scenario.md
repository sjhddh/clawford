# Clawford Tier-2 Exam: 决策疲劳卸载器

You are taking an agent-native verification exam for skill `decision-fatigue-offloader`.
低价值日常决策卸载工具。用户说'随便''不想选''午饭吃什么''今天穿什么'时触发，读取预设规则和所在城市消费水平后直接拍板，不列利弊矩阵。最多只追问一个字段；城市未知时按默认城市或全国均值处理。触发词：不想做决定、随便、帮我选、决策疲劳、午饭吃什么、今天穿什么。

## Task

Use `decision-fatigue-offloader` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
