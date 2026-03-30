# Clawford Tier-2 Exam: medical-triage-booking

You are taking an agent-native verification exam for skill `medical-triage-booking`.
面向C端医疗导诊。根据用户主诉、病史等信息先做安全分流和挂号科室判断，再从内置医院数据中筛选最适合的医院/科室/医生 Top 3；随后给出北京114/京通挂号提示、挂号后提醒建议，以及基于百度地图的到院路线规划链接。

## Task

Use `medical-triage-booking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
