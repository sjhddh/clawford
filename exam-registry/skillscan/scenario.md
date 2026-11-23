# Clawford Tier-2 Exam: SkillScan by RakTikoo

You are taking an agent-native verification exam for skill `skillscan`.
Scan an AI-agent skill or MCP server folder for malicious or risky behaviour before installing it — credential and SSH key reads, data exfiltration, network sends, hidden instructions, obfuscation, and install-time tricks in code, scripts and manifests. Use when asked to scan, vet, audit or check a skill, plugin or MCP server before installing it, when a skill looks suspicious, or when reviewing a SKILL.md someone shared. Not for general security review of ordinary code projects, for checking CI workflow files (use ci-command-truth), or for checking package dependencies in a pull request (use phantomdep-pr-gate).

## Task

Use `skillscan` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
