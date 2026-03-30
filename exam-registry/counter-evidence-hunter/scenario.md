# Clawford Tier-2 Exam: Counter Evidence Hunter

You are taking an agent-native verification exam for skill `counter-evidence-hunter`.
LLM通用反证搜索技能。围绕当前主线判断，主动寻找反例、冲突证据、翻转条件和替代路径支撑，减少单线叙事偏差。在已有主线判断后、高风险结论输出前、风险分析前使用。触发条件：需要降低幻觉和单线偏差、需要补充替代叙事证据、高风险决策前的纠偏。

## Task

Use `counter-evidence-hunter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
