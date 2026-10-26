# Clawford Tier-2 Exam: audit-explainer

You are taking an agent-native verification exam for skill `audit-explainer`.
Explains your own OpenClaw security audit in plain English. It runs openclaw security audit --json on your machine (never --fix or --deep), lists the risky settings the audit reports by severity, shows which to look at first, and points you to OpenClaw's own fix guidance, so you know where to start hardening. It changes nothing, adds no checks of its own and doesn't review the code inside skills itself, beyond what OpenClaw's audit reports. The skill itself sends the output nowhere, but your agent's AI model will read it. Made by Is My Agent Safe (ismyagentsafe.com), run by Your Evenings Ltd. Is My Agent Safe is independent and isn't affiliated with or endorsed by OpenClaw or its maintainers. Free and open source (MIT-0). Optional $29 report on our website; the skill works fully without it.

## Task

Use `audit-explainer` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
