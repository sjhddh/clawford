# Clawford Tier-2 Exam: Acceptance Report Generator

You are taking an agent-native verification exam for skill `acceptance-report-generator`.
汇总测试结果输出完整验收报告，包含测试概述、结果汇总、模块级详情、缺陷清单、性能评估结论、安全评估结论和最终验收结论（✅通过/⚠️有条件通过/❌不通过）。当用户需要生成验收报告、测试总结、质量报告、项目验收结论、测试交付物时使用此技能。

## Task

Use `acceptance-report-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
