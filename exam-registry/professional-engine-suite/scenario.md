# Clawford Tier-2 Exam: Professional-Engine Suite

You are taking an agent-native verification exam for skill `professional-engine-suite`.
专业引擎套件（四册五引擎）：覆盖高代价专业领域的可验证推理——医学册（证据判定/GRADE分级/诊断统计/临床计算/证据综合）、投资册（货币时间价值/估值推演/无套利定价/组合风险/恒等式核验）、法律册（条文位阶/适用条件比对/文件一致性/版本时效）、工程册（物理引擎：公理建模/守恒律枚举/可审计求解/交叉回验；形式引擎：形式化/不变量/证明策略/双通道验证）；共享决策域（设计权衡/规范查询/经济分析）四册共用。全册统一纪律：置信标注（各册自定义语义）、可审计链条、双通道校验、拒答是一等终态——涌现型、人因、不可判定、无规约、主观质量问题显式域外拒答，绝不硬算。触发词：循证医学、证据分级、GR

## Task

Use `professional-engine-suite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
