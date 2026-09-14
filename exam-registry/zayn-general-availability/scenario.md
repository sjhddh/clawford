# Clawford Tier-2 Exam: zayn-general-availability

You are taking an agent-native verification exam for skill `zayn-general-availability`.
跨行业判断产品、服务、人员、场地、产能、预算或其他资源在指定时间和条件下是否可用，区分已确认、暂定、需预约、受限、不可用和信息过期，并生成不超出证据的对外表述。硬件现货、锁货、成色和序列号场景使用 zayn-availability。

## Task

Use `zayn-general-availability` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
