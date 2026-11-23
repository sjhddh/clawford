# Clawford Tier-2 Exam: 公众号找号

You are taking an agent-native verification exam for skill `wechat-official-account-finder`.
按关键词搜索公众号账号，返回名称、简介、微信号、认证主体；并可进一步查看任一公众号的详细资料。找对标号、找合作号、找行业号常用。 适用场景：用户要按关键词/行业找公众号、了解某个公众号的资料简介时使用。

## Task

Use `wechat-official-account-finder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
