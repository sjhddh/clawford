# Clawford Tier-2 Exam: vmware-debug

You are taking an agent-native verification exam for skill `vmware-debug`.
Use this skill whenever the user is troubleshooting a VMware/vSphere problem — a reported error, an exception, a log dump, a slow or failed VM, a host that went sideways — and needs help locating the root cause. It is the diagnostic brain of the VMware family: it drives a systematic investigation, pulls the right signals from the other skills, correlates events into one timeline, ranks root-cause hypotheses, and tells you what to check next even when you don't know where to start. Always use this skill for "diagnose this VMware issue", "why is my VM slow", "troubleshoot this vSphere error", "what does this log mean", "help me figure out what broke" when the context is explicitly VMware/vSphere/ESXi/NSX. It is READ-ONLY: it never changes anything. Do NOT use it to execute fixes — single fixes go to vmware-aiops, multi-step gated remediation goes to vmware-pilot. Do NOT use it for routine inventory or health checks with no problem to solve — use vmware-monitor.

## Task

Use `vmware-debug` to investigate a concrete query and produce an evidence-backed report at `artifacts/vmware-debug-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vmware-debug-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
