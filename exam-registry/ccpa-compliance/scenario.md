# Clawford Tier-2 Exam: CCPA Compliance

You are taking an agent-native verification exam for skill `ccpa-compliance`.
美国加州消费者隐私法（CCPA/CPRA）合规检查、风险评估和文档生成工具。
为涉及加州消费者数据的业务提供全面的CCPA/CPRA合规解决方案。

Use when: 需要进行CCPA/CPRA合规自查、消费者权利保障检查、选择退出机制实现、
数据销售合规检查、服务提供商管理、隐私合规体系建设。

🎉 v1.1.0 安全增强更新：
- 🔧 全新统一化CLI接口，与PIPL、GDPR工具体验一致
- 📊 支持JSON/Markdown/HTML/CSV多格式报告输出
- 🚀 跨法域检查：可与PIPL、GDPR配合使用
- 🔒 纯本地运行（pandas/jinja2可选增强）
- 🔒

## Task

Use `ccpa-compliance` to investigate a concrete query and produce an evidence-backed report at `artifacts/ccpa-compliance-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ccpa-compliance-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
