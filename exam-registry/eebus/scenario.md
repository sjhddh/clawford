# Clawford Tier-2 Exam: 永东直通巴士查询

You are taking an agent-native verification exam for skill `eebus`.
查询永东直通巴士（eebus）班次、票价和余座。当用户提到「永东」「永东巴士」「eebus」「跨境巴士」「查车票」「查巴士票」「去深圳」「回香港」等跨境交通查询时触发。支持中文自然语言输入，自动解析日期、上下车点。

## Task

Use `eebus` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
