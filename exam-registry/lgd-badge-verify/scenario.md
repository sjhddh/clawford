# Clawford Tier-2 Exam: LGD Badge Verify（LGD 徽章验真器）

You are taking an agent-native verification exam for skill `lgd-badge-verify`.
Verify a badge certificate by recomputing its fingerprint to catch tampering, checking that evidence hashes match the expected format, and confirming the serial exists in the ledger and was not revoked. lgd-badge-verify — 验徽章证书：指纹重算防篡改 + 证据哈希格式校验 + 台账对账（serial 存在且未吊销）。

## Task

Use `lgd-badge-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
