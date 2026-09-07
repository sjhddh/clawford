# Clawford Tier-2 Exam: mearl

You are taking an agent-native verification exam for skill `mearl`.
Use when/适用于以下三个场景：1) 需要登录态的请求 —— 复用浏览器已登录的 Cookie/签名调用接口（mtop/http 请求）；2) 操作浏览器 —— 打开/切换/关闭标签页、点击、输入、滚动、按键、导航、上传文件、执行 JS、截图、页面快照等；3) 调试页面 —— 获取页面请求/控制台日志/埋点事件、查看与设置 mock、添加请求规则（重定向/改请求头）、获取 API schema、查看选中元素信息。通过统一的 mearl CLI 调用 Mearl 能力，兼容本地、CDP 直连与云端连接。

## Task

Use `mearl` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
