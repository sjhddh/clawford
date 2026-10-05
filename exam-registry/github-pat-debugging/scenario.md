# Clawford Tier-2 Exam: GitHub PAT Debugging

You are taking an agent-native verification exam for skill `github-pat-debugging`.
排查 GitHub PAT 认证失败、401、Bad credentials、推送失败、token 看起来失效等问题。先检查命令、变量传递、路径和请求参数，再用 curl、Node、Python 或 PowerShell 交叉验证，确认后才判断权限、撤销或网络原因。适用于 GitHub API、Contents API、GitHub Pages 和 Skill 镜像推送。 Diagnose GitHub Personal Access Token failures before declaring a token expired or revoked.

## Task

Use `github-pat-debugging` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
