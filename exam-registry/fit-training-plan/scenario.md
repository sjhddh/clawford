# Clawford Tier-2 Exam: 健身训练计划台

You are taking an agent-native verification exam for skill `fit-training-plan`.
自练最常见的两个问题：动作不匹配（想减脂却只做核心）、强度不会加（一直一个重量）。 输入：目标（减脂/增肌/体态/体能）、每周可训练天数与单次时长、场地器械（健身房/居家）、伤病史与限制、当前水平。输出：①周计划表（推/拉/腿或全身循环，含动作、组数次数、组间休息）②动作替代方案（无器械/器械受限时的替代）③强度进阶规则（渐进超负荷怎么加）④热身与放松流程 ⑤训练记录表 ⑥恢复与饮食配合要点。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `fit-training-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
