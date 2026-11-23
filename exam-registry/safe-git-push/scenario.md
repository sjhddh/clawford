# Clawford Tier-2 Exam: safe-git-push

You are taking an agent-native verification exam for skill `safe-git-push`.
从 agent 工作区安全推送文件到 GitHub。父级 git 仓库场景下隔离 init,防止敏感配置文件、构建产物目录、其他无关项目子目录被误推。触发:用户说「上传到 GitHub」「推到 GitHub」「创建 GitHub 仓库」「备份项目到 GitHub」,或 OpenClaw 沙箱内 git push 超时需走 Contents API fallback。

## Task

Use `safe-git-push` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
