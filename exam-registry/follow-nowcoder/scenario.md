# Clawford Tier-2 Exam: follow-nowcoder

You are taking an agent-native verification exam for skill `follow-nowcoder`.
牛客面经报告生成。搜索牛客网上的面试经验帖，生成结构化面经报告。在用户请求查看面经、准备面试、搜索面试经验时使用。

## Task

Use `follow-nowcoder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
