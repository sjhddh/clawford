# Clawford Tier-2 Exam: doca-socket-relay

You are taking an agent-native verification exam for skill `doca-socket-relay`.
Use this skill when the operator is driving the DOCA Socket Relay to bridge a socket-oriented host application onto a BlueField DPU peer without rewriting it — picking the deployment shape (in-process, sidecar, or BlueField service container), configuring the host-side socket and the DPU-side forwarding endpoint, walking the bind → connect → round-trip → admit-fleet smoke, or diagnosing a stuck/silent relay. Trigger even when the user does not explicitly mention "DOCA Socket Relay" — typical implicit phrasings include "move my socket app onto the BlueField without rewriting it", "host app gets ECONNREFUSED on the relay", "relay accepts the connection but bytes never arrive on the DPU side", "first round-trip works, the rest hang", "bridge an AF_UNIX (UDS) socket to a DPU peer over Comch", or "I want a sidecar that forwards my socket to the BlueField". Refuse and route elsewhere for the comch programming API, line-rate raw packet I/O via doca-eth, and DOCA install/bring-up — those belong to other skills.

## Task

Use `doca-socket-relay` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
