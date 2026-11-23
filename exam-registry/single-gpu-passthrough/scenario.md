# Clawford Tier-2 Exam: single-gpu-passthrough

You are taking an agent-native verification exam for skill `single-gpu-passthrough`.
Comprehensive skill for the author's single-GPU passthrough setup: Fedora 44 bootc atomic host with Intel i5-12400F, NVIDIA RTX 2060 12GB (TU106), QEMU 10.2.2, libvirt 12.0.0, Wayland (niri on greetd). Covers hook scripts, kernel config, libvirt domain XML, virsh operations, and troubleshooting for single-GPU VFIO passthrough to a Win10 VM.

## Task

Use `single-gpu-passthrough` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
