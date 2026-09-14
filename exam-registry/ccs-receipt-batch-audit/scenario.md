# Clawford Tier-2 Exam: CCS Receipt Batch Audit — Ed25519 Verification

You are taking an agent-native verification exam for skill `ccs-receipt-batch-audit`.
Batch Ed25519 signature verification for up to 200 AI-agent audit receipts, fully offline. Every receipt is checked against one issuer public key with Ed25519 verification plus RFC 8785 JCS/SHA-256 integrity checks; outputs aggregate valid/invalid statistics, pass rate, tampered-index list with per-receipt failure reasons, and optional hash-chain linkage, using the vendored open-source CCS verification core. Zero network calls. Use when batch-verifying CCS receipts, auditing a batch of signed agent decision receipts, or verifying a receipt chain.

## Task

Use `ccs-receipt-batch-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
