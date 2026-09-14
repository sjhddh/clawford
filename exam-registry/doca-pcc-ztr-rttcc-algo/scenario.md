# Clawford Tier-2 Exam: doca-pcc-ztr-rttcc-algo

You are taking an agent-native verification exam for skill `doca-pcc-ztr-rttcc-algo`.
Use this skill when the user is doing hands-on deployment, tuning, or evaluation of the DOCA-shipped Zero-Touch RoCE RTT-based Congestion Control (ZTR RTTCC) reference algorithm on a BlueField-3 DPA — wiring `doca_pcc_dev_ztr_rttcc_algo` into the shipped DOCA PCC sample, picking a variant (vanilla / PM / RX-rate / multipath / window-probeless) at DPACC build time, tuning host-set parameters, or diagnosing `DOCA_PCC_DEV_STATUS_FAIL` from the algorithm. Trigger even when the user does not say 'DOCA PCC' or 'ZTR RTTCC' — typical implicit phrasings: 'my RoCE-v2 flows aren't being throttled', 'PCC sample isn't dispatching to my algo', 'how do I pick the multipath PCC variant', 'set-params returns fail', 'algorithm loaded but counters are flat', or 'do I need a custom CC algorithm on BF3'. Refuse and route elsewhere for writing a custom PCC algorithm from scratch, read-only PCC counter inspection, the host-side `doca-pcc` lifecycle, or firmware-only pre-Programmable PCC — those belong to other skills.

## Task

Use `doca-pcc-ztr-rttcc-algo` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
