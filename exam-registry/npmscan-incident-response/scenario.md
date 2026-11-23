# Clawford Tier-2 Exam: npmscan incident response

You are taking an agent-native verification exam for skill `npmscan-incident-response`.
Turn a flagged npm supply-chain finding — or just a vague, non-technical description of one ("this package looks sketchy," "someone said we got hacked," "npm install did something weird") — into concrete remediation steps. Use whenever the user wants to know what to actually do about a suspicious/compromised/flagged package, however precisely or vaguely they describe it — not for the initial trust/vulnerability investigation itself (see package-trust-check/dependency-audit for that).

## Task

Use `npmscan-incident-response` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
