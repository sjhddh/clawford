# Clawford Tier-2 Exam: doubao-account-pool

You are taking an agent-native verification exam for skill `doubao-account-pool`.
想用豆包网页版做出图、出视频，又不想办会员、不想申请 API key？这套把「一个已授权账号 = 一个独立浏览器实例 → 扫码授权 → 批量出图 → 出视频 → 取件 → 关掉浏览器还能回捞」封成配置驱动的命令行工具。实例之间互不串数据、互不踢下线；授权二维码自动裁切放大，可直接发手机扫；出图内置「基线闸」防止拿到上一轮的旧图；出视频先读确认卡再走，遇到付费弹层立即中止、绝不点升级；关掉浏览器后还能回捞最近会话里的图和视频，已生成没抓到链的可以单独重抓，不重跑、不重复消耗。所有命令只返回结构化短行，页面文本/DOM/截图绝不回流；长任务产物先落盘再筛。换机器、换智能体，只改配置就能跑——包内不含任何个人路径、cookie 与密钥，登录态在本机扫码产生。

## Task

Use `doubao-account-pool` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
