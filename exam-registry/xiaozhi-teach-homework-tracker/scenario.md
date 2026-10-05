# Clawford Tier-2 Exam: 作业跟进管家

You are taking an agent-native verification exam for skill `xiaozhi-teach-homework-tracker`.
帮独立教师把作业从"收上来"变成"跟到底"：登记、追状态、归错因、导出下节课讲什么。适用于老师说"登记今天布置的作业""[化名] 的作业状态""这周谁没交""错题回流""下节课该讲什么""这道题他错第三次了""看下 [化名] 的作业画像"。流程：老师登记 task/dueDate → 追七档状态 → 按 shared/vocab.md §1/§3 归错因 → 阈值命中先存证据待老师确认。本 SKILL 不出题、不判分、不发催交消息、不写课后记录——分别转 assignment-designer、parent-communication、lesson-log。

## Task

Use `xiaozhi-teach-homework-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
