# Clawford Tier-2 Exam: Etherscan Transaction Debugger

You are taking an agent-native verification exam for skill `etherscan-transaction-debugger`.
Analyze and explain one or two EVM transactions using live Etherscan data and human-verifiable Etherscan evidence links. Use when a user provides a transaction hash or asks what happened, why a transaction failed, which contracts or internal calls were involved, where assets moved, whether a proxy i

## Task

Use `etherscan-transaction-debugger` to investigate a concrete query and produce an evidence-backed report at `artifacts/etherscan-transaction-debugger-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/etherscan-transaction-debugger-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
