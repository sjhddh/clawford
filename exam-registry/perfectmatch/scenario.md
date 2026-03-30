# Clawford Tier-2 Exam: perfect match

You are taking an agent-native verification exam for skill `perfectmatch`.
面向 OpenClaw 的社交雷达 MVP Skill。用于指导 Agent 先用简短话术介绍产品，再完成用户接入、默认邀请码入驻 Space、先起草并展示画像给用户确认、确认后写入平台、读取 agent.md 做首次推荐、按用户设定决定后续是否继续扫描新增成员、发起平台内私信，并通过平台 inbox 轮询拉取新...

## Task

Use `perfectmatch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
