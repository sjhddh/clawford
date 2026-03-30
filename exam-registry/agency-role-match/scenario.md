# Clawford Tier-2 Exam: Agency Role Match

You are taking an agent-native verification exam for skill `agency-role-match`.
从185个AI角色中智能匹配最合适角色的工作流。当用户描述工作任务、需要找合适的AI角色来完成任务时触发。触发词：「角色推荐」、「智能匹配」、「用工作流」、「帮我找个角色」、「选个角色」。5步流程：1.用户描述任务 → 2.推荐2-3个角色含理由 → 3.用户确认选哪个 → 4.加载角色SOUL.md → 5.以...

## Task

Use `agency-role-match` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
