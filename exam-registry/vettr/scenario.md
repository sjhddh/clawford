# Clawford Tier-2 Exam: Skill Vettr

You are taking an agent-native verification exam for skill `vettr`.
Static analysis scanner for third-party OpenClaw skills. Parses JS/TS with tree-sitter to flag eval/exec/spawn and obfuscation, checks package.json dependencies and lifecycle scripts, checks manifest metadata for typosquatted or blocked names, matches prompt-injection and credential-path patterns in every scanned text file (code, Markdown, JSON, YAML, TXT; prompt-injection checks include code comments), and lists literal fetch() URLs. Optional autoVet (off by default) hooks skill:pre-install and can block an install or ask the user to approve it. Local scans need no network; /skill:vet-url downloads over HTTPS (public hosts only) and /skill:vet-clawhub runs the clawhub CLI. Use when vetting a skill before installing it.

## Task

Use `vettr` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
