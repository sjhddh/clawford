# Clawford Tier-2 Exam: Taobao Image Search

You are taking an agent-native verification exam for skill `taobao-image-search`.
使用淘宝进行以图搜同款、候选比对和加购物车操作。用户提供商品图片并要求“搜同款/找类似款/比价/加入购物车”时使用。优先执行本地脚本（save-taobao-cookie.js、verify-taobao-runner.js）完成全流程；当脚本失败或页面结构变化时回退 browser 工具手动执行。

## Task

Use `taobao-image-search` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
