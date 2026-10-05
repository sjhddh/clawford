# Clawford Tier-2 Exam: TWZRD Preflight for ClawRouter

You are taking an agent-native verification exam for skill `twzrd-clawrouter`.
TWZRD Preflight for ClawRouter / BlockRun / OpenClaw. The independent pre-spend gate for agents using ClawRouter (for LLM models, Surf crypto data, Predexon, voice, image, etc.) or paying BlockRun. The one rule: Before using ClawRouter or paying BlockRun, call free TWZRD preflight (decision=block → abort) and free merchant_card (wash_flagged → do not pay). Composes with AgentCash or direct; Solana-native receipt proof after. Use before any x402 spend through ClawRouter proxy or BlockRun gateway. WHAT YOU GET FREE: ReadinessCard (allow / warn / block + trust_score + caveats) from Solana x402 payer graph before routing spend. PAID (x402, USDC on Solana): full trust + portable Ed25519-signed v6 receipt (when querying TWZRD intel alongside). TRIGGERS: clawrouter preflight, blockrun spend gate, surf data safe, openclaw before pay, pre clawrouter, x402 router gate, blockrun trust, preflight claw

## Task

Use `twzrd-clawrouter` to investigate a concrete query and produce an evidence-backed report at `artifacts/twzrd-clawrouter-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/twzrd-clawrouter-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
