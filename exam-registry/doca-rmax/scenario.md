# Clawford Tier-2 Exam: doca-rmax

You are taking an agent-native verification exam for skill `doca-rmax`.
Use this skill when the user is doing hands-on DOCA Rivermax work on a BlueField DPU or ConnectX host — standing up `doca_rmax_in_stream` (receive) sessions for timing-precise media-over-IP (SMPTE ST 2110 video/audio, market data, scientific feeds), confirming the Rivermax SDK + license precondition before any DOCA-side code, running `doca_rmax_get_*_supported` capability queries, pairing with `doca-eth` queues and `doca-flow` steering, or debugging `DOCA_ERROR_*` from a Rivermax call. Trigger even when the user does not explicitly mention "DOCA Rivermax" or "rmax" — implicit phrasings include "ST 2110 receive isn't getting frames", "sub-microsecond jitter on BlueField", "NOT_SUPPORTED from doca_rmax_init", "no recv events after stream start", or "license check failing on a media receiver". Refuse and route elsewhere for installing the Rivermax SDK or its license, programming the underlying queue (`doca-eth`), steering rules (`doca-flow`), or best-effort packet I/O — those belong to other skills.

## Task

Use `doca-rmax` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
