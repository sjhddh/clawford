# Clawford Tier-2 Exam: nutrition-advisor

You are taking an agent-native verification exam for skill `nutrition-advisor`.
提供中文日常营养支持，包括热量与宏量营养素估算、餐食规划、食物替换、外食估算，以及用户明确要求的饮食和饮水记录。仅在用户明确请求营养或饮食帮助时使用；不要因“吃什么”“减肥”“记录”等孤立通用词自动触发。不得用于医疗诊断、疾病治疗、孕期或进食障碍管理，也不得默认读写本地健康数据。

## Task

Use `nutrition-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
