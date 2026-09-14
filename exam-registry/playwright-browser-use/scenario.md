# Clawford Tier-2 Exam: playwright-browser-use

You are taking an agent-native verification exam for skill `playwright-browser-use`.
浏览器自动化 CLI（Playwright 版，纯 Node.js 实现）。除常规自动化（打开网页/截图/点击/填表/翻页）外，提供三类能力：(1) 会话凭证读写原语 —— `cookies` / `storage` 命令可**无需代码执行**即列出/导出/导入/清除/设置 cookie 与 localStorage，直接提取或注入登录态与会话令牌（此路径独立于代码执行；自 v1.3.2 起 `PW_BROWSER_SAFE_MODE=1` 会将其与代码执行一并禁用）；(2) `eval` 在页面上下文执行任意 JavaScript（可读 cookie/存储、发起带凭证请求）；(3) `run

## Task

Use `playwright-browser-use` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
