# Clawford Tier-2 Exam: Ma2 Control

You are taking an agent-native verification exam for skill `ma2-control`.
grandMA2 实体控台控制技能。通过 Telnet 连接控台执行命令。 用于：选灯、调光、存 Cue、播放、查询等 MA2 操作。 触发条件：用户提到 MA2、grandMA2、灯光控台、选灯、存 Cue、执行器等。 执行命令必须使用 ~/ma2_bridge/ma2_cmd.sh 脚本。

## Task

Use `ma2-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
