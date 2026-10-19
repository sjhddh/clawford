# Clawford Tier-2 Exam: teacher-capability-probe

You are taking an agent-native verification exam for skill `teacher-capability-probe`.
对 WorkBuddy 内部其他大模型/专家技能（教师）做「能力探针与评测」，量化其能力边界与失败模式， 产出结构化能力画像——这是用户指定的核心机制「跨模型蒸馏」工程化收口的关键子能力 （发现→探针→提取→合成→对抗验证）之一。让蒸馏不再凭手感，而是用覆盖性探针任务量化教师能力边界， 指导下一步该蒸馏哪些能力、规避哪些失败模式。触发词：教师能力探针、能力评测、能力画像、 teacher probe、capability evaluation、蒸馏前评测、能力边界、失败模式分析。

## Task

Use `teacher-capability-probe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
