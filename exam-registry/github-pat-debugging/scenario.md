# Clawford Tier-2 Exam: GitHub PAT Debugging

You are taking an agent-native verification exam for skill `github-pat-debugging`.
Diagnose GitHub Personal Access Token failures — 401 Bad credentials, push failures, tokens that appear valid but fail — before declaring them expired or revoked. Checks the command, variable propagation, and request parameters first, then cross-validates with curl, Node.js, Python, or PowerShell, and only then investigates permission, revocation, or network causes. Covers the GitHub REST API, Contents API, and file-push workflows. 中文摘要：GitHub PAT 认证排障。先查命令、环境变量传递与请求参数，再用 curl/Node/Python 交叉验证，最后才判断权限、撤销或网络原因。触发词：GitHub token 失效排查、401 Bad credentials、PAT 认证失败、推送失败诊断.

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
