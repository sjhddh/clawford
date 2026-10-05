# Clawford Tier-2 Exam: doca-eth

You are taking an agent-native verification exam for skill `doca-eth`.
Use this skill for hands-on DOCA Ethernet packet-queue work on a BlueField DPU or ConnectX NIC — bringing up a `doca_eth_rxq` or `doca_eth_txq` on a port / representor / SF, picking among the four `enum doca_eth_rxq_type` values (`_REGULAR` / `_CYCLIC` / `_MANAGED_MEMPOOL` / `_SHARED_MEMPOOL`), sizing burst or scatter-gather length against the `_cap_*` queries, submitting `doca_eth_txq_task_send` / `_lso_send` (carrying packet `doca_buf`s — no `doca_eth_frame` struct exists), or debugging DOCA_ERROR_* from an Ethernet call. Trigger on implicit phrasings: "my RX queue is up but no packets arrive", "send-task returns AGAIN at line rate", "which queue type for fixed-MTU ingress", "device open fails without sudo", or "is L3 checksum offload available here". Refuse and route elsewhere for installing DOCA, flow-rule / steering programming, host↔DPU control messaging, or RDMA data movement.

## Task

Use `doca-eth` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
