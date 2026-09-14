# Clawford Tier-2 Exam: doca-firefly

You are taking an agent-native verification exam for skill `doca-firefly`.
Use this skill when the user is operating the DOCA Firefly Service container on BlueField — picking the four PTP configuration axes (role / profile / domain / interface), wiring the BlueField PHC + host follower + consumer workload pairing, deciding whether PTP-grade time is even needed (vs. chrony / NTP), or debugging a Firefly deployment where PTP isn't syncing or the host clock isn't following. Trigger even when the user does not explicitly mention "DOCA Firefly" or "PTP" — typical implicit phrasings include "container green but PTP never advances past LISTENING", "Firefly says synced but the host clock still drifts", "sync acquired but offset is tens of microseconds", "my Rivermax SMPTE workload needs PTP", or "is chrony good enough". Refuse and route elsewhere for installing DOCA, host-side chrony / ptp4l config bodies, PTP topology / boundary-clock design, building DOCA apps that read the disciplined PHC, or other DOCA services (DMS, Flow-Inspector, HBN) — those belong to other skills.

## Task

Use `doca-firefly` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
