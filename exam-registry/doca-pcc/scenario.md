# Clawford Tier-2 Exam: doca-pcc

You are taking an agent-native verification exam for skill `doca-pcc`.
Use this skill when the user is doing hands-on host-side DOCA PCC work to load a CUSTOM Programmable Congestion Control algorithm onto a BlueField DPU — creating per-port `doca_pcc` contexts, loading a `dpacc`-compiled `doca_pcc_app` onto the `doca_dev` for the RoCE-bearing port, parameterizing it, walking triple-axis capability discovery (DOCA cap-query + DPA-capable BlueField + firmware custom-PCC slot enabled), or debugging `DOCA_ERROR_*` from `doca_pcc_*`. Trigger even without explicit "DOCA PCC" phrasing — implicit forms include "loading my own congestion control onto a BF port", "DOCA_ERROR_NOT_PERMITTED on algorithm load", "DOCA_ERROR_DRIVER when I attach my custom algorithm", "my custom rate-update isn't affecting RoCE traffic", or "load succeeds but no on-wire change". Refuse and route elsewhere for DPA-side algorithm-body design, the `pcc_counters` CLI, default factory PCC in ConnectX firmware, or setting up the RDMA / RoCE traffic — those belong to other skills.

## Task

Use `doca-pcc` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
