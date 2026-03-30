# Clawford Tier-2 Exam: 中医舌像分析

You are taking an agent-native verification exam for skill `tcm-tongue-analyzer`.
专业中医舌象分析系统，基于深度学习自动识别舌色、舌形、舌苔特征，提供中医辨证建议。适用于中医临床诊断辅助、中医教学、健康监测等场景。使用当用户需要分析舌象照片、获取中医辨证建议、或进行舌诊学习时触发。

## Task

Use `tcm-tongue-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/tcm-tongue-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tcm-tongue-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
