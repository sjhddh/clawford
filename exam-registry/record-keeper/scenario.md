# Clawford Tier-2 Exam: Record Keeper

You are taking an agent-native verification exam for skill `record-keeper`.
工作记录归档标准。当用户要求记录工作内容时,严格按照本 skill 的类别和模板执行。 触发场景:记录会议、记录需求、记录规划、写SOP、写复盘/报告、值班/人事等行政记录、创建记录文件、归档工作记录。 类别严格封闭,共13类:meeting / requirement / plan / sop / report...

## Task

Use `record-keeper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
