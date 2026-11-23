# Clawford Tier-2 Exam: skill-firewall

You are taking an agent-native verification exam for skill `skill-firewall`.
Security scanner for AI agent skills (SKILL.md packs). Use before installing any skill from ClawHub, GitHub or external sources, when auditing a skill directory for malicious patterns (prompt injection, credential theft, exfiltration, destructive commands, obfuscated payloads, persistence), or when asked "is this skill safe?". Produces a SAFE/CAUTION/SUSPICIOUS/MALICIOUS verdict with evidence and CI-friendly exit codes. Strict by default; context-based severity reductions require an explicit opt-in.

## Task

Use `skill-firewall` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
