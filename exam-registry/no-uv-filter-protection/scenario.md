# Clawford Tier-2 Exam: no-uv-filter-protection

You are taking an agent-native verification exam for skill `no-uv-filter-protection`.
用户在纠结"要不要装UV镜保护镜头"、问"UV镜有没有用"、或发现照片有炫光 想排查原因时调用。不适用于滤光镜创意使用（应调用其他滤光镜相关skill） 或纯器材购买建议。 Invoke when the user is debating "should I put a UV filter on my lens," asks "is a UV filter useful," or has lens flare and wants to troubleshoot. Not for creative filter usage (other filter skills) or pure gear purchase advice. 关键 trigger / Key triggers: "UV镜"、"天光镜"、"保护镜头"、"UV filter"、 "skylight filter"、"lens protection"、"lens flare"、 "should I use UV filter"、"do I need a UV filter"、"lens flare causes"。

## Task

Use `no-uv-filter-protection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
