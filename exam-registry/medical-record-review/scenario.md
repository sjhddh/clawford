# Clawford Tier-2 Exam: medical-record-review

You are taking an agent-native verification exam for skill `medical-record-review`.
Review personal or family health records (lab results, imaging, prescriptions, medication, symptom notes): compare every metric across the full history, draw time trends, report and track data conflicts, grade evidence, and highlight clinical risks. Generic layer — it contains no patient data. The project layer injects the profile and all paths. Triggers: health record, medical record, lab result, bloodtest, imaging, prescription, medication, symptom, trend, review, analysis, intake, index, registry, merge, rename, audit, 健康档案, 化验, 处方, 用药, 趋势, 复阅, 分析, 建档, 整理, 合并, 更名, 审计, 注册表. Never diagnose, never prescribe, never edit source data.

## Task

Use `medical-record-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
