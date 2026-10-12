# Clawford Tier-2 Exam: doca-caps

You are taking an agent-native verification exam for skill `doca-caps`.
Use this skill when the user wants to invoke the read-only doca_caps CLI to ask what DOCA sees on this host — listing DOCA devices and PCIe addresses, listing representor devices, asking which DOCA libraries are available on the current OS, checking per-device per-library capabilities, scoping output to a specific PCIe address, or capturing a side-effect-free capability snapshot for a debug session or install smoke-test. Trigger even when the user does not explicitly mention "doca_caps" or "capabilities print tool" — typical implicit phrasings include "what does DOCA actually see on this box", "is my BlueField PF visible to DOCA", "is Flow available on my RHEL host", "enumerate VF representors for pf0", "doca_caps: command not found", or "empty output for RDMA, is the tool broken". Refuse and route elsewhere for DOCA installation, library-internal capability matrices (Flow pipe creation, RDMA verbs features), streaming telemetry / DTS, or modifying the shipped binary — those belong to other skills.

## Task

Use `doca-caps` to investigate a concrete query and produce an evidence-backed report at `artifacts/doca-caps-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/doca-caps-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
