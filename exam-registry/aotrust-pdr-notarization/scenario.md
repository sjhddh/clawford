# Clawford Tier-2 Exam: Aotrust Notarize

You are taking an agent-native verification exam for skill `aotrust-pdr-notarization`.
Issue a cryptographic proof (PDR) that a digital artifact existed at a specific time. Pay $0.01 USDC on Base or Solana via x402 (MCP); optional evidence bundle $0.02 and signed time attestation $0.002. Receipts are leaves in an append-only Merkle log anchored hourly to NEAR blockchain; inclusion and consistency proofs are public. ONLY invoke when the user explicitly requests notarization or proof-of-existence for a specific artifact. This skill performs a paid external API call ($0.01 USDC, irreversible). Do NOT invoke proactively or as part of unrelated workflows.

## Task

Use `aotrust-pdr-notarization` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
