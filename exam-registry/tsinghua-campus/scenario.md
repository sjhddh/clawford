# Clawford Tier-2 Exam: 清华校园技能包

You are taking an agent-native verification exam for skill `tsinghua-campus`.
清华校园技能包（统一入口）。涵盖网络学堂/课表/成绩/培养方案/选课/第二成绩单/邮箱/文献/图书馆/座位预约/研读间/校内通知/水木搜索 等校园事务。当用户提到"校园服务、网络学堂、作业、课表、成绩、邮箱、文献、图书馆、座位、研读间、校内通知、搜书"等需求时使用。

## Task

Use `tsinghua-campus` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
