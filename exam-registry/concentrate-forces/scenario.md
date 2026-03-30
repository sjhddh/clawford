# Clawford Tier-2 Exam: Concentrate Forces

You are taking an agent-native verification exam for skill `concentrate-forces`.
触发：当多个任务同时争夺时间、注意力、算力或预算，必须确定主攻方向并停止分散用力时调用；常见信号包括优先级过多、资源紧张、推进分散、需要决定先做什么。 English: Trigger when limited resources are being split across too many tasks and...

## Task

Use `concentrate-forces` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
