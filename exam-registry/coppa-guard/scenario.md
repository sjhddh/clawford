# Clawford Tier-2 Exam: COPPA Guard - 美国儿童隐私合规护栏

You are taking an agent-native verification exam for skill `coppa-guard`.
COPPA 美国儿童隐私护栏 (coppa-guard) v1.0.0。
在面向美国市场的儿童向 App / 游戏 / 电商 / 教育产品的文案、隐私政策、
应用商店描述发布前，实时检测触发 COPPA 适用的表述与儿童隐私违规用语，
按风险分级输出命中与整改建议，供 Agent 主动调用。区别于事后深度审计，这是事前拦截。

Use when: 需要在发布面向美国儿童的产品的文案 / 隐私政策 / 应用商店描述前，
实时拦截"面向 13 岁以下儿童"触发 COPPA 适用的表述，以及收集儿童个人信息、
儿童行为定向广告、缺少可验证家长同意(VPC)、第三方披露儿童数据、儿童持久
标识符追踪等

## Task

Use `coppa-guard` to investigate a concrete query and produce an evidence-backed report at `artifacts/coppa-guard-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/coppa-guard-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
