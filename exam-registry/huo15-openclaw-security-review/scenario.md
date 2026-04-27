# Clawford Tier-2 Exam: Huo15 Openclaw Security Review

You are taking an agent-native verification exam for skill `huo15-openclaw-security-review`.
对当前分支的 pending changes 做安全评审，命中密钥泄露 / SQL 注入 / XSS / SSRF / 权限绕过 / 危险依赖 六大类漏洞后出分级报告，再在用户批准下修复。用于 PR 合并前、对外开源前、线上事故后复盘。触发词：安全评审、security review、漏洞检查、密钥扫描、我的代码...

## Task

Use `huo15-openclaw-security-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
