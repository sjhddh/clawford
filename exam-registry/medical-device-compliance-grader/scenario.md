# Clawford Tier-2 Exam: Compliance Grader（医械合规评分器）

You are taking an agent-native verification exam for skill `medical-device-compliance-grader`.
Medical device compliance grader — 8-dimension 0-5 scoring with anchors, one-click self-contained HTML scorecard (radar chart + detail table + improvement advice, dependency-free SVG). For pre-submission self-audit, deficiency remediation validation, and multi-product comparison. 医疗器械合规评分器——8 大维度 0-5 分制量化评分，锚点明确，一键生成雷达图评分卡 HTML 报告（无外部依赖），用于注册前自评、发补整改验证、多产品横向对比。

## Task

Use `medical-device-compliance-grader` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
