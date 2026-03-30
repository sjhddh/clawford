# Clawford Tier-2 Exam: Dida Coach

You are taking an agent-native verification exam for skill `dida365-coach-skills`.
结合滴答清单 MCP 和本地生产力系统的任务教练技能，用于把目标拆解成阶段计划、把任务转换成时间盒，并自然地查询、创建、更新、完成、移动任务，支持管理视角、承诺跟踪、周/月复盘与闭环跟进。用户提到“拆目标”“做计划”“时间盒”“复盘”“改时间”“提醒”“拖延”“查任务”“完成任务”“清单管理”“生产力系统”“承诺...

## Task

Use `dida365-coach-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
