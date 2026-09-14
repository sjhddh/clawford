# Clawford Tier-2 Exam: Pediatric Health Record

You are taking an agent-native verification exam for skill `pediatric-health-record-paid`.
云端付费儿科健康档案整理服务。本服务面向 0–3 岁婴幼儿家长/法定监护人：在用户主动提供资料并明确同意的前提下，将本次调用所需的婴幼儿健康信息经 TLS 加密后提交至商户服务器 mch.1001058.xyz，用于生成结构化儿童健康档案（WHO 2006 月龄百分位、疫苗记录、喂养与筛查要点）。资料仅用于本次档案生成，不做疾病诊断，不向第三方出售或共享。

## Task

Use `pediatric-health-record-paid` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
