# Clawford Tier-2 Exam: github-autosetup

You are taking an agent-native verification exam for skill `github-autosetup`.
自动化配置 pi 在 GitHub/git 的行动（纯 Git Bash 驱动）：环境探测 → 传输通道决策（https/GCM 或 SSH）→ 浏览器 OAuth → 带口令 SSH 密钥 + agent → 建仓推送 → post-commit 自动推送 + 计划任务兜底。内置敏感信息传递 SOP（令牌/口令/密钥/cookie 零明文）。当用户说"配置 github / 自动推送 / 建仓库 / 推送仓库 / 配置 git"时使用。

## Task

Use `github-autosetup` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
