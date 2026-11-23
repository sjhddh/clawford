# Clawford Tier-2 Exam: doca-bare-metal-deployment

You are taking an agent-native verification exam for skill `doca-bare-metal-deployment`.
Running a DOCA-linked binary directly on the hardware, with no container or kubelet: on host x86 with a BlueField NIC over PCIe, or bare-metal on BlueField Arm. Use this skill for launching and supervising it (direct, tmux, systemd), and when it "exits 1 right after launch", "systemd keeps restarting it", reports "no matching device on the BF", or the BlueField itself is unhealthy: "bfb-install exited 0 but DPU is dead", "ping 192.168.100.2 works but ssh fails", "host PFs aren't showing netdevs". Refuse service containers under kubelet (doca-container-deployment). Covers PCI/NUMA/CPU/IRQ binding, co-tenant isolation (cgroup-v2/netns/numactl), a seven-layer error taxonomy, platform lifecycle (BFB install, RShim/TMFIFO, host PF rebind, post-BFB recovery) and a six-state BlueField lifecycle classifier. Destructive firmware burn / mlxconfig set requires explicit confirmation via doca-hardware-safety; library APIs, env prep, and build use other skills.

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
