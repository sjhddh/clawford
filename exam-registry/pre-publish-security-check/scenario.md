# Clawford Tier-2 Exam: Pre-Publish Security Check

You are taking an agent-native verification exam for skill `pre-publish-security-check`.
Skill 发布前安全检查工具。在发布 skill 到 ClawHub 前，自动扫描敏感信息（API Key、Token、私钥、邮箱、手机号、精确坐标等）。Use before publishing any skill to prevent leaking private data.

## Task

Use `pre-publish-security-check` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
