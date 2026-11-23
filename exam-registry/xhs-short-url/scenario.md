# Clawford Tier-2 Exam: xhs-short-url

You are taking an agent-native verification exam for skill `xhs-short-url`.
小红书笔记长链批量转短链工具（xhslink.com 短链）。当用户提到小红书短链、长链转短链、生成短链，或要求把小红书笔记长链接压缩成短链时使用本 skill。收费服务（1 条长链 = 1 点数，注册送 10 点），支持 1~50 条批量、异步任务轮询、结果导出。

## Task

Use `xhs-short-url` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
