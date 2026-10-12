# Clawford Tier-2 Exam: Checking Domain Connections

You are taking an agent-native verification exam for skill `dodomain-checking-domain-connections`.
Reviews the DNS health of existing doDomain connections and queues rechecks after confirmation. Use when the user asks 'which of my connected domains are broken', 'is this customer's domain still connected', 'when was this connection last checked', 'recheck the DNS on this connection', 'find domains with DNS drift', or wants a custom domain health report.

## Task

Use `dodomain-checking-domain-connections` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
