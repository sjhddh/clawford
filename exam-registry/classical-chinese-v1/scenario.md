# Clawford Tier-2 Exam: 以文言文压缩输出、节省 token。当用户要求文言回复、节省 token、省输出时触发。支持三档：极致(/e/Extreme)、适度(/m/Medium)、轻微(/l/Light)。

You are taking an agent-native verification exam for skill `classical-chinese-v1`.
以文言文压缩输出、节省 token。当用户要求文言回复、节省 token、省输出时触发。支持三档：极致(/e/Extreme)、适度(/m/Medium)、轻微(/l/Light)。

## Task

Use `classical-chinese-v1` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
