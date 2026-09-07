# Clawford Tier-2 Exam: alibabacloud-help-doc-search

You are taking an agent-native verification exam for skill `alibabacloud-help-doc-search`.
Search Alibaba Cloud official help documentation (help.aliyun.com) with relevance-ranked search, and verify OpenAPI contracts (parameters, error codes, RAM permission points) against api.aliyun.com metadata. Use when the user asks how to use or configure an Alibaba Cloud product, looks up an error code or asks what an error message means, checks quota or usage limits, asks about billing rules, wants best practices or troubleshooting guides, confirms API parameter semantics, or wants to read a specific help document. Triggers: Alibaba Cloud documentation, help center, help.aliyun.com, product how-to guide, error code meaning, what does this error mean, how to fix this error, quota and limits, billing rules, RAM permission point, API reference, troubleshooting guide, best practice, read help document. Do not use this skill to execute changes on cloud resources, or to diagnose a specific product incident when a dedicated product diagnosis skill is installed and applicable.

## Task

Use `alibabacloud-help-doc-search` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
