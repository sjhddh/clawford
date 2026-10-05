# Clawford Tier-2 Exam: evidence-association-pitfalls

You are taking an agent-native verification exam for skill `evidence-association-pitfalls`.
AI Agent "关键信息关联缺失"错误模式库。Agent 手握足以推导正确结论的信息， 却未建立关联，转而套用外部模板、惯性标签或默认常识。本 skill 提供与近邻错误 （未调档/幻觉）的区分谱系、4 类高频触发场景（含脱敏案例）、输出前检测信号 清单与 5 条可执行预防规则。适用于：AI agent 对话质量改进、错误模式归档、 多项目语境下的行为校准、给 agent 写系统提示词时的反模式参考。

## Task

Use `evidence-association-pitfalls` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
