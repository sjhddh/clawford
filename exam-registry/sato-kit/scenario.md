# Clawford Tier-2 Exam: sato-kit

You are taking an agent-native verification exam for skill `sato-kit`.
Prepare and execute onchain agent actions (chain reads, swap quotes, swaps, x402 payments) through the Sato Kit CLI with a policy pre-flight, simulation and a receipt log. Use when an agent needs to read chain state, quote or build a swap, or prepare an x402 payment and hand it to a signer only after a person has seen the summary. Fork network by default.

## Task

Use `sato-kit` to investigate a concrete query and produce an evidence-backed report at `artifacts/sato-kit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sato-kit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
