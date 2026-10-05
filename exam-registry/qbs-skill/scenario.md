# Clawford Tier-2 Exam: QBS Skill 拷问书籍方法论

You are taking an agent-native verification exam for skill `qbs-skill`.
拷问书籍方法论：把卡住的问题经「拷问收敛→找书→完整读章→三重验证蒸馏→合成Skill→真实试跑」六阶段，产出有书籍出处、可验收的Skill。说「拷问书籍方法论」时触发。Do NOT use for 改进已有skill、无需读书依据的问答、古籍建库。

## Task

Use `qbs-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
