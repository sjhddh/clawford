# Clawford Tier-2 Exam: 成片参考分析

You are taking an agent-native verification exam for skill `video-reference`.
按需把一部成片拆成可复用的制作参考：测镜头节奏与响度，标注段落与音轨分工，把原片事实与可迁移方法分开， 导出不含原片人名台词的 production_reference.json 供下次制作参考。不在默认生产路径上。 触发词：拆片、拆解成片、制作参考、参考模板、production reference。

## Task

Use `video-reference` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
