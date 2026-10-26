# Clawford Tier-2 Exam: 员工手册章节台

You are taking an agent-native verification exam for skill `hr-handbook`.
网上的员工手册模板常年不更新，条款与现行法规冲突；自己写又不知道哪些必须写、哪些写了反而有风险。 输入：公司规模与行业、需要制定的章节（考勤/请假/加班/报销/保密/奖惩/离职）、现有做法。输出：①章节条款（分条编号，可直接进手册）②每条对应的执行口径（谁来执行、怎么留痕）③风险提示（哪些表述可能引发争议）④配套表单清单 ⑤公示与告知的落地步骤。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `hr-handbook` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
