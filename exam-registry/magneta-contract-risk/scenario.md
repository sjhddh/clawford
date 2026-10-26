# Clawford Tier-2 Exam: magneta-contract-risk

You are taking an agent-native verification exam for skill `magneta-contract-risk`.
Check a smart contract's risk before trading, approving, bridging or integrating it, using the Magneta Contract Risk x402 service (0-100 score, proxy/owner/mint/blacklist/fee flags, verified-source and static-analysis findings, 20 EVM chains). Free bytecode-only quick flags need only curl; the full report costs $0.02 USDC on Base per call and is paid only with explicit user approval. Use when about to sign a transaction involving an unfamiliar token or contract, or when asked whether a token looks like a rug or honeypot. Not an audit.

## Task

Use `magneta-contract-risk` to investigate a concrete query and produce an evidence-backed report at `artifacts/magneta-contract-risk-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/magneta-contract-risk-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
