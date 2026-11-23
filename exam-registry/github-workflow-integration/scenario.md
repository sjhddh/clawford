# Clawford Tier-2 Exam: github-workflow-integration

You are taking an agent-native verification exam for skill `github-workflow-integration`.
GitHub 工作流集成 — 纯 stdlib CLI 包装 GitHub REST API：开 PR / 列 PR / 查 commit status / Git Data API 推文件（blob→tree→commit→ref）。令牌从环境变量 GITHUB_TOKEN 读取，零存储零打印。当你想脚本化"提 PR / 推文件到远端分支 / 查 CI 状态"又不想装 git+gh 时使用；触发词：github-pr、开 PR、推送文件、commit status、CI 状态查询。

## Task

Use `github-workflow-integration` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
