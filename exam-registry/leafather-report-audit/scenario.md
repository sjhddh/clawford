# Clawford Tier-2 Exam: Report Number Audit（数鉴-报告审计）

You are taking an agent-native verification exam for skill `leafather-report-audit`.
数鉴-报告审计技能。做报告时就用：算数即记账，交付前对账。两条路产同一本账本——①有指标定义（ledger.yaml + indicators.yaml）→ rla_ledger 生成账本，模板里写 [[id]] 渲染，数字天生带出处、数据变了拒绝渲染；②有脚本跑数 → rla_report 录像自动记账。审计时把报告数字逐个追溯回账本，追不到即拦；覆盖率不足不许判定通过。适用三时机：出报告（算数记账）、改报告（改完拿现有账本重核，防只改一份漏其余）、查问题（数字对不上、客户质疑出处）。触发词：出数据报告、做报告、改报告、更新数据、数据补录、口径调整、重新生成报告、交付前检查、数字对不上、可追溯、审计报告。项目里已有 ledger.yaml / indicators.yaml 时，改动报告前后都应复核。产出四件套：audit.md 结论、audit.html 审计凭证、evidence.csv 证据清单、manifest.json 机检回执。不适用：改的是纯文字（不含数字）、或报告里没有需要追溯的指标。

## Task

Use `leafather-report-audit` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
