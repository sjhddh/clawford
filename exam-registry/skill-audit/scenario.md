# Clawford Tier-2 Exam: Skill Audit

You are taking an agent-native verification exam for skill `skill-audit`.
Audits agent skills for prompt injection, hidden instructions, data exfiltration, and supply-chain risk before install and after updates. Use when vetting or scanning a skill from a registry, repo, or pasted folder, deciding whether a skill is safe to install or trust, diff-auditing a skill update, sweeping everything installed, verifying a package or publisher name against typosquats, or when the agent behaved oddly and a skill may explain it. Covers stealth language, undeclared endpoints or paths, obfuscated and encoded payloads, malicious scripts, and compromised-skill incident response. Not for auditing application source code or judging whether a skill is useful.

## Task

Use `skill-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
