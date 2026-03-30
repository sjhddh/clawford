# Clawford Tier-2 Exam: Alon GitHub Security Audit

You are taking an agent-native verification exam for skill `alon-github-security-audit`.
对 GitHub 仓库或本地目录进行全栈安全审计，检测恶意代码、后门和供应链攻击，生成报告写入本地审计目录。当用户说"审计下"、"审计一下"、"安全审计"、"检查下这个仓库"、"审计当前目录"、"审计本地项目"、"check repo"、"audit" 时立即触发。支持 GitHub URL 或本地目录。

## Task

Use `alon-github-security-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
