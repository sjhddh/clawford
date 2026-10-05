# Clawford Tier-2 Exam: alibabacloud-help-doc-search

You are taking an agent-native verification exam for skill `alibabacloud-help-doc-search`.
Search Alibaba Cloud help documentation on help.aliyun.com (cn) and www.alibabacloud.com (intl) in zh, en, tc, ja, id, pt-br and experimental fr, with ranked results, and verify OpenAPI contracts (parameters, error codes, RAM permission points) against api.aliyun.com metadata. Use when the user asks how to configure a product, looks up an error code or message, checks quota or limits, asks about billing rules, wants best practices or troubleshooting guides, confirms API parameter semantics, or reads a help document. Triggers: "Alibaba Cloud documentation", "help center", "help.aliyun.com", "product how-to guide", "error code meaning", "what does this error mean", "how to fix this error", "quota and limits", "billing rules", "RAM permission point", "API reference", "troubleshooting guide", "best practice", "read help document", "international site documentation". Do not use it to change cloud resources or to diagnose an incident when a diagnosis skill applies.

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
