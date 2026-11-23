# Clawford Tier-2 Exam: doca-bf3-deployment

You are taking an agent-native verification exam for skill `doca-bf3-deployment`.
Use this skill for BlueField-3 (BF3) day-1 platform bring-up via the classic RShim/BFB path: pushing a BlueField bundle (BFB) to the DPU over RShim with bfb-install from the host, the host-to-DPU TMFIFO management channel (tmfifo_net0, the 192.168.100.x convention), RShim daemon state and console-over-rshim, DPU mode selection (DPU/embedded-function vs separated-host/NIC mode) via mlxconfig, post-BFB recovery, a six-state BlueField-state classifier, and verifying the install (cat /etc/mlnx-release plus version checks). Trigger even when the user does not say "BF3" — typical phrasings include {push a BFB to my BlueField-3}, {bfb-install exited 0 but the DPU never came back}, {ping 192.168.100.2 works but ssh fails}, or {is DOCA on the host or the Arm side?}. BFB reflash, mlxconfig set, mode changes, and firmware burns are destructive: require explicit target-bound confirmation and load doca-hardware-safety. App launch, container deploy, env install, and the BF4 BMC-Redfish path route elsewhere.

## Task

Use `doca-bf3-deployment` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
