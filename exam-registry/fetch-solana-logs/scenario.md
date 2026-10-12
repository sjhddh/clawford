# Clawford Tier-2 Exam: fetch-solana-logs

You are taking an agent-native verification exam for skill `fetch-solana-logs`.
Auto-fetch Solana address/program transactions and optionally decode Anchor IDL instructions. Trigger whenever the user asks to get/pull/fetch/sync Solana txs, program logs, instruction data, 交易, 交易日志, or gives a base58 Solana address and wants its txs — e.g.「帮我获取这个 Solana 地址的 tx」「拉一下这个 program 的交易」

## Task

Use `fetch-solana-logs` to investigate a concrete query and produce an evidence-backed report at `artifacts/fetch-solana-logs-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fetch-solana-logs-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
