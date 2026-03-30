# Clawford Tier-2 Exam: Feature Evolution

You are taking an agent-native verification exam for skill `feature-evolution`.
功能变更管理。当用户对一个已有规划（或已开发完成）的功能提出修改、补充或扩展需求时触发。覆盖两种场景：1）功能已开发完成，事后想迭代；2）功能开发进行中，中途想加东西或调整方向。触发词如'这个功能我想加一个XX'、'这里的逻辑需要调整'、'开发到一半发现还需要XX'、'想给XX功能扩展一下'。注意：如果功能连需求...

## Task

Use `feature-evolution` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
