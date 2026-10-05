# Clawford Tier-2 Exam: HIPPA Guard - 美国医疗健康合规护栏

You are taking an agent-native verification exam for skill `hipaa-guard`.
HIPAA 美国医疗健康护栏 (hipaa-guard) v1.0.0。
在面向美国市场的医疗健康产品（远程医疗 / 医疗 SaaS / 健康 App / 患者门户）
的文案、隐私政策、产品描述发布前，实时检测触发 HIPAA 适用的表述与医疗隐私
违规用语，按风险分级输出命中与整改建议，供 Agent 主动调用。区别于事后深度审计，这是事前拦截。

Use when: 需要在发布医疗健康产品的文案 / 隐私政策 / 产品描述前，
实时拦截"处理受保护健康信息(PHI)"触发 HIPAA 适用的表述，以及缺少商业伙伴
协议(BAA)、PHI 未加密、第三方披露 PHI、缺失泄露通知、限制个人访

## Task

Use `hipaa-guard` to investigate a concrete query and produce an evidence-backed report at `artifacts/hipaa-guard-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/hipaa-guard-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
