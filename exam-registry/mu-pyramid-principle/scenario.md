# Clawford Tier-2 Exam: 金字塔原理逻辑教练

You are taking an agent-native verification exam for skill `mu-pyramid-principle`.
金字塔原理逻辑教练,支持快捷模式(贴文本自动诊断重组)和引导模式(对话构建金字塔)。触发词:金字塔原理、逻辑诊断、结构化思考、MECE、SCQA、结论先行、帮我理清思路、逻辑有问题、汇报结构。不适用:纯语法修改(用mu-humanizer-minesweeping)、PPT制作(用mu-ippt)、批判性思维提问(用mu-critical-thinking)。

## Task

Use `mu-pyramid-principle` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
