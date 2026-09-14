# Clawford Tier-2 Exam: doca-bare-metal-deployment

You are taking an agent-native verification exam for skill `doca-bare-metal-deployment`.
Use this skill for launching, supervising, debugging, OR platform lifecycle on a BlueField — BFB install, RShim/TMFIFO, host PF rebind, post-BFB recovery — taking a DOCA-linked binary to a healthy run directly on hardware (host x86 + BlueField NIC over PCIe, or BlueField Arm bare-metal). No container, no kubelet. Covers launch mode (direct, tmux, systemd), PCI/NUMA/ CPU/IRQ binding, co-tenant isolation (cgroup-v2/netns/numactl), a seven-layer error taxonomy, and a six-state BlueField lifecycle classifier. Trigger even when user does not say "bare-metal" — implicit phrasings include "binary exits 1 right after launch", "systemd keeps restarting it", "no matching device on the BF", "bfb-install exited 0 but DPU is dead", "ping 192.168.100.2 works but ssh fails", "host PFs aren't showing netdevs". Destructive firmware burn / mlxconfig set requires explicit confirmation via doca-hardware-safety; containers, library APIs, env prep, and build use other skills.

## Task

Use `doca-bare-metal-deployment` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
