# Clawford Tier-2 Exam: 废标风险检查-控标信号与限制条款识别

You are taking an agent-native verification exam for skill `bid-risk-redline-checker`.
废标风险与控标信号识别助手。当用户给出一个具体的招标项目并希望排查风险时，必须使用此SKILL：废标风险评估、限制性信号识别（邀请招标/单一来源/定向资质条款/超短投标窗口/线下取文件）、竞争开放度分析、采购方历史供应商格局与在位者识别、同类项目对比、投标决策建议。基于全网招中标历史数据输出风险评估报告。即使用户没有提到「废标」，只要涉及标书有没有坑、是不是内定倾向、值不值得投等需求，都应使用本SKILL。

## Task

Use `bid-risk-redline-checker` to investigate a concrete query and produce an evidence-backed report at `artifacts/bid-risk-redline-checker-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bid-risk-redline-checker-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
