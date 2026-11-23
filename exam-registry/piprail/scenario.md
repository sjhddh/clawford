# Clawford Tier-2 Exam: PipRail

You are taking an agent-native verification exam for skill `piprail`.
A self-custodial crypto payment wallet for your OpenClaw agent, with a hard spend cap it can't exceed. It autonomously pays x402 paywalls ('402 Payment Required') on every major chain, settling funds straight to the recipient — no facilitator, no fee, no signup. Runs read-only with no key (discover/quote/plan before you add a wallet); add a key only to let the agent pay, optionally gaslessly via the standard x402 'exact' rail.

## Task

Use `piprail` to investigate a concrete query and produce an evidence-backed report at `artifacts/piprail-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/piprail-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
