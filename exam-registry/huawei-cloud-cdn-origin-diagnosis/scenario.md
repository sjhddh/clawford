# Clawford Tier-2 Exam: huawei-cloud-cdn-origin-diagnosis

You are taking an agent-native verification exam for skill `huawei-cloud-cdn-origin-diagnosis`.
Diagnose CDN origin server reachability and back-to-source failures using hcloud CLI. Query the origin configuration (origin_addr, origin_type, http_port, https_port, origin_protocol) of a CDN domain via ShowDomainFullConfig/v2, then probe origin server connectivity using the Python probe script (scripts/origin_probe.py) to identify the root cause of back-to-source failures, origin unreachable errors, and abnormal responses. Use when the user wants to: (1) diagnose CDN back-to-source failures, (2) check why origin server is unreachable, (3) troubleshoot origin configuration issues, (4) verify origin connectivity from the network perspective, (5) investigate abnormal HTTP responses from the origin. Triggers include: '源站诊断', '源站不可达', '回源失败', 'origin diagnosis', 'origin unreachable', '回源异常', '源站配置' Do NOT use this skill for configuration changes, cache refresh/preheat, domain lifecycle management, or billing operations — this skill is strictly read-only diagnosis.

## Task

Use `huawei-cloud-cdn-origin-diagnosis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
