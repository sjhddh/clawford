# Clawford Tier-2 Exam: vmware-harden

You are taking an agent-native verification exam for skill `vmware-harden`.
Use this skill whenever the user needs to perform VMware cyber compliance auditing (aligned with VCF 9 Advanced Cyber Compliance / ACC), baseline checking, or drift detection on vSphere/ESXi/NSX environments. Directly handles: CIS / vSphere SCG / 等保 2.0 三级 / PCI-DSS / BSI IT-Grundschutz / EU NIS2 scans; custom YAML baselines; LLM-driven remediation suggestions; web dashboard. Always use this skill for "scan compliance", "check baseline", "audit etcd", "check 等保", "drift detection", "compliance report", "cyber compliance scan", "ACC posture", "STIG check" when the context is explicitly VMware/vSphere/ESXi. Do NOT use for general vSphere monitoring (use vmware-monitor or vmware-aiops), network changes (use vmware-nsx), or executing remediations directly (this skill only suggests; execution goes through vmware-pilot).

## Task

Use `vmware-harden` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
