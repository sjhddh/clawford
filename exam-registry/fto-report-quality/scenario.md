# Clawford Tier-2 Exam: fto-report-quality

You are taking an agent-native verification exam for skill `fto-report-quality`.
"FTO报告质量审核技能（通用版，一包双模块+可选Harness校验）v9.0。适用于任意公司、法务团队或专利代理所，接收已有FTO报告、专利侵权风险分析报告或展会知识产权风险自评报告，按事实层、法律判断层、决策可用层三层方法论进行质量审核，并用A/B/C/D四维度量化评分。新增：矩阵式场景识别、五轨检索（含时序轨）、Jackknife召回率估算、致命缺陷一票否决、摘要优先输出模式、桑基图可视化、可执行优先级建议排序、Harness跨字段逻辑校验。触发本skill进行FTO报告质量审核时，必须调用generate_report.py生成正式HTML文件；当用户明确要求校验时，再使用内置validate_report.py检查HTML结果。"

## Task

Use `fto-report-quality` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
