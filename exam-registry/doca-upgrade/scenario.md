# Clawford Tier-2 Exam: doca-upgrade

You are taking an agent-native verification exam for skill `doca-upgrade`.
Use this skill when the user is contemplating a DOCA upgrade or downgrade — moving a host to a newer DOCA release, refreshing the BlueField BFB, bumping the NGC DOCA container tag, or rolling back. The discipline is detect → report → ASK → only-then guided upgrade: detect what is installed, discover what newer release exists, report the gap, then STOP and ask for explicit confirmation — never upgrade automatically. Trigger even without the word "upgrade": "is there a newer DOCA", "should I move to the next release", "I want the latest features", "my component is being deprecated, what now", or "roll me back". Route elsewhere for version detection (doca-version), first-time install (doca-setup), any hardware/firmware/reboot step (doca-hardware-safety), and public-docs / sunset routing (doca-public-knowledge-map).

## Task

Use `doca-upgrade` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
