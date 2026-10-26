# Clawford Tier-2 Exam: A股财报深度点评

You are taking an agent-native verification exam for skill `cue-cn-earnings-note`.
给你一家公司 + 报告期，产出八节点评初稿：四期差异、科目勾稽、指引与兑现对照、盈利质量分桶、预测脚手架。四道机检的如实范围：①AI 声明与 [待人工] 就位；②散文数字行须有证据级标注，逐条拦+95%（哪些行算「数字行」以包内 check_note.py 两条正则现值为准，本文举例非穷尽；列表行与索引节按设计豁免）；③账本数值对象带basis字段；④合规词表最小集。--sources 仅给出时校验 JSONL 形制与自写 [S] 可解析，不逐条要求带锚、不回查原文；「同比/单季」属出稿纪律，靠人守。适合：财报复盘、投研底稿、晨会；不适合：出具评级、监管申报、无公开披露渠道。

## Task

Use `cue-cn-earnings-note` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-earnings-note-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-earnings-note-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
