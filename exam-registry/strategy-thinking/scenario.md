# Clawford Tier-2 Exam: strategy-thinking

You are taking an agent-native verification exam for skill `strategy-thinking`.
帮用户围绕一件想做成、解决、调整、判断或推进的事情，明确当前结果、识别真正问题、判断条件与资源、寻找和选择路径，并形成下一步可执行方案。当用户存在行动意图但需要策划层面的系统性思考时触发。不是模板生成器、不是问卷、不是万能顾问。

## Task

Use `strategy-thinking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
