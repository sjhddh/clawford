# Clawford Tier-2 Exam: Direct WeChat Article Reader

You are taking an agent-native verification exam for skill `shrimp-wechat-mp-reader`.
直接读取微信公众号文章正文的可执行 skill。适用于用户提供 mp.weixin.qq.com 链接，并明确要你读正文、摘录内容、提取标题、做总结的场景。与很多只给方法或提示词的同类 skill 不同，这个 skill 自带 setup、run 和 Playwright 提取脚本，已经在真实文章上验证能读出标题...

## Task

Use `shrimp-wechat-mp-reader` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
