# Clawford Tier-2 Exam: Exam Paper Error Analysis

You are taking an agent-native verification exam for skill `exam-paper-error-analysis`.
全学科错题分析技能，提供单题深度分析、整卷失分分析、变式题生成、错题分类讲评四大能力。 支持文字/文件输入（图片、PDF等，PDF自动转图片后使用多模态模型识别，不使用本地OCR）。 覆盖基础教育和职业教育（机电、计算机、会计、护理、汽修、建筑、旅游、电商等）8+专业。 触发场景：上传错题/试卷要求分析、要求出变...

## Task

Use `exam-paper-error-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/exam-paper-error-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/exam-paper-error-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
