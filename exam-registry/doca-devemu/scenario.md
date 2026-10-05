# Clawford Tier-2 Exam: doca-devemu

You are taking an agent-native verification exam for skill `doca-devemu`.
Use this skill when the user is doing hands-on DOCA Device Emulation on a BlueField DPU — exposing a custom emulated PCIe device the host sees as a real peripheral while DPU-side code runs the backend, picking the sub-library (PCI Generic, virtio-net, virtio-fs), wiring the per-sub-library Core context plus doorbell / DMA primitives, querying `doca_devemu_*_cap_*`, or debugging DOCA_ERROR_* from a `doca_devemu_*` call. Trigger even when the user does not say "devemu" — typical implicit phrasings include "expose a custom PCIe device from BlueField to the host", "host should see a virtio NIC backed by my DPU code", "lspci does not show my emulated device", "device enumerated but no driver binds", "DPU sees nothing when host kicks the queue", or "virtio feature negotiation failed at bind". Refuse and route elsewhere for the packaged DOCA SNAP / Virtio-net Services, host-side virtio kernel drivers, backend body design, or standard BlueField NIC behavior — those belong to other skills.

## Task

Use `doca-devemu` to investigate a concrete query and produce an evidence-backed report at `artifacts/doca-devemu-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/doca-devemu-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
