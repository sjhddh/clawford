# Clawford Tier-2 Exam: alibabacloud-waf-openapi-error-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-waf-openapi-error-diagnosis`.
Diagnose why an Alibaba Cloud WAF OpenAPI call failed: find which request parameter's name, format, value, or required-ness disagrees with the official spec, and return a corrected call in the same channel. Covers BOTH generations -- WAF 2.0 (version 2019-09-10) and WAF 3.0 (version 2021-10-01) -- across CLI, SDK, and raw RPC. Read-only: fetches the authoritative parameter spec and diffs the request; never runs a write action and needs no credentials for the core diff. Use when a call returns InvalidParameter / MissingParameter / a malformed-parameter error, when parameters filled per the docs still fail, when a CLI action is "not available in the current API version", or when asked which parameter is wrong. Not for: credential/signature, RAM denials, throttling, not-purchased, server 5xx, rule-not-effective, or why one request was blocked. Triggers: "WAF OpenAPI 报错", "InvalidParameter", "MissingParameter", "参数格式错误", "哪个参数错了", "not available in the current API version", "which parameter is wrong"

## Task

Use `alibabacloud-waf-openapi-error-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
