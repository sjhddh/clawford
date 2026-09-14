# Clawford Tier-2 Exam: 王者大师

You are taking an agent-native verification exam for skill `wzry-build-advisor`.
王者荣耀出装与节奏建议。当用户说在玩某个英雄、对面有难搞/克制自己的英雄、报当前装备并问怎么出装、出什么克制对面，或问野怪/BUFF/暴君主宰刷新时间与节奏时使用。基于本地装备、英雄与野区数据给出下一件装备、成装路线和资源节奏。

## Task

Use `wzry-build-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
