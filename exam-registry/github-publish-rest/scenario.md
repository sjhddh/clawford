# Clawford Tier-2 Exam: GitHub Publish (REST API)

You are taking an agent-native verification exam for skill `github-publish-rest`.
Publish a local folder to a GitHub repo as ONE commit via the REST Git Data API — the working method when the GitHub connector is read-only (create_repository / push_files return 403) and the bundled git has no credential helper. Reads the stored token (git credential fill, or GITHUB_TOKEN / GH_TOKEN env), then creates blobs → tree → commit → ref. Ships a ready-to-run zero-dependency Python script (scripts/github-publish.py), a post-publish blob SHA verification method, and documents the known pitfalls (account-rename 307, git credential fill hang, timezone-aware contribution graph). Use when the user says "publish to github", "push to github", "upload code", "create repo", "deploy skill", "发到 github", "推到 github", "上传代码", "新建仓库".

## Task

Use `github-publish-rest` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
