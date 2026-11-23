# Clawford Tier-2 Exam: insurance-advisor-china

You are taking an agent-native verification exam for skill `insurance-advisor-china`.
中国大陆AI保险顾问。为个人和家庭提供全方位的保险咨询、产品对比、方案设计、投保指导。当用户询问保险配置、保险方案、产品对比、重疾险/医疗险/寿险/意外险/储蓄险推荐、保费计算、保障缺口分析、需求分析、核保合规、理赔等问题时使用。发布产物仅含 SKILL.md + 3 个只读参考文件（references/products.json、insurance-knowledge.md、compliance.md）+ 3 个运行时脚本（needs_analyzer / premium_calculator / plan_designer）；数据清洗脚本与回归测试脚本是本地维护工具，不随发布产物分发。

## Task

Use `insurance-advisor-china` to investigate a concrete query and produce an evidence-backed report at `artifacts/insurance-advisor-china-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/insurance-advisor-china-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
