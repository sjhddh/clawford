# Clawford Tier-2 Exam: BOSS Recruit Assistant

You are taking an agent-native verification exam for skill `boss-recruit`.
BOSS直聘招聘助手。处理"新招呼"收件箱：读候选人在线简历同步飞书多维表格，有附件简历则零弹窗下载并同步，没附件则主动发消息要简历。内置反风控节奏层（随机延时/批量上限/验证码熔断/权益耗尽诊断/防发错人）。当用户提到 Boss直聘招聘、处理新招呼、候选人简历同步飞书、批量打招呼要简历时使用。

## Task

Use `boss-recruit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
