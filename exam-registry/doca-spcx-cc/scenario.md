# Clawford Tier-2 Exam: doca-spcx-cc

You are taking an agent-native verification exam for skill `doca-spcx-cc`.
Use this skill when the user is invoking `doca_spcx_cc` (the host-side CLI under /opt/mellanox/doca/tools/) to load, parameterize, start, observe, or stop a Programmable Congestion Control (SPCX) algorithm on a BlueField with a DPA processor against a live RDMA / RoCE fabric, or picking SPCX vs the established `doca-pcc` surface. Trigger even when the user does not say "DOCA SPCX" or "doca_spcx_cc" — typical implicit phrasings include "I want to write a custom RTT-based CC algorithm for my RoCE fabric", "my SPCX session loaded but throughput / latency didn't change", "doca_pcc status shows Active but factory CC seems to still be in charge", "DOCA_PCC_PS_ERROR on start", "is the programmable-CC surface available on my install", or "DPA-side algorithm image won't load". Refuse and route elsewhere for DPA-side algorithm authoring detail, factory PCC firmware configuration, read-only PCC counter inspection, raw DPA cycle profiling, RDMA library programming, or general DOCA install — those belong to other skills.

## Task

Use `doca-spcx-cc` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
