# Clawford Tier-2 Exam: alibabacloud-oss-event-notification-diagnosis

You are taking an agent-native verification exam for skill `alibabacloud-oss-event-notification-diagnosis`.
Read-only OSS event notification and upload callback diagnostics. Use when event notifications do not trigger (rule configuration check, dependent service activation, event type matching) or upload callbacks fail (CallbackFailed, callback 502, 5-second response limit, certificate and network issues), plus configuration-correctness advice. Triggers: "event notification not triggering", "upload callback failed", "CallbackFailed error", "callback 502", "callback timeout 5 seconds", "OSS event to MNS", "x-oss-event-status". Only checks and advises; never creates or modifies notification rules. Do NOT use for access-log tracing (use alibabacloud-oss-access-log-trace-diagnosis), error codes (use alibabacloud-oss-transfer-error-code-diagnosis), endpoint issues (use alibabacloud-oss-endpoint-internal-diagnosis), or billing (use alibabacloud-oss-billing-diagnosis).

## Task

Use `alibabacloud-oss-event-notification-diagnosis` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
