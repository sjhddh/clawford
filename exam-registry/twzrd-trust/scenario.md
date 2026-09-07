# Clawford Tier-2 Exam: TWZRD Trust

You are taking an agent-native verification exam for skill `twzrd-trust`.
Discover x402 callables then check the seller BEFORE paying. Free resource join (GET /v1/intel/resources) lists listed|live_402 claims; free preflight returns a ReadinessCard (allow / warn / block) from the observed Solana x402 corpus. Composes with any x402 payer skill: discover → merchant_card wash refuse → preflight → gate_eval (AutoGate) when you control signing → optional pay; abort on decision=block. WHAT YOU GET FREE: resource join (source of truth), wash overlay on ingested listings (PayAI not_indexed), pre-spend ReadinessCard, merchant_card (wash_flagged refuse), wallet scores, secondary payer leaderboard research, counterparty + facilitator footprint, wash/sybil detection, batch + compare, offline receipt verify; route settle through TWZRD for free merchant_attach + twzrd_receipt on POST /settle. PAID (x402, USDC on Solana): full trust model + V6 receipt at GET /v1/intel/trust/{pubkey} (0.05 USDC); merchant track-record at GET /v1/intel/merchant/{pay_to} (0.05 USDC); score-only teaser at GET /v1/intel/quick/{pubkey} (0.001 USDC). TRIGGERS: should I pay this, is this wallet safe, check seller, x402 preflight, scam check, counterparty risk, wallet reputation, trust score, verify receipt, before paying, solana wallet check, agent trust, readiness card, wash flagged, merchant card, resource join, discover x402, facilitator settle, merchant attach, track record

## Task

Use `twzrd-trust` to investigate a concrete query and produce an evidence-backed report at `artifacts/twzrd-trust-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/twzrd-trust-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
