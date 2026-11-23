# Clawford Tier-2 Exam: Zerq Clawhub

You are taking an agent-native verification exam for skill `zerq`.
归零（ZeroQ/ZerQ）质量问题双归零方法论指导。提供技术归零五条（定位准确/机理清楚/问题复现/措施有效/举一反三）与管理归零五条（过程清楚/责任明确/措施落实/严肃处理/完善规章）的结构化分析框架。用于质量问题归因、8D/纠正措施、根因分析、归零报告、措施验证场景。本版为名称预留版，完整四层级架构版本即将发布。

## Task

Use `zerq` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
