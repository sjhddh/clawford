# Clawford Tier-2 Exam: fingerprint-delivery

You are taking an agent-native verification exam for skill `fingerprint-delivery`.
指纹锁定交付，用于回答「怎么证明这份文件没被改过」「怎么证明我是先做出来的」「交付物怎么防篡改」这类问题

## Task

Use `fingerprint-delivery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
