# Clawford Tier-2 Exam: doca-upgrade

You are taking an agent-native verification exam for skill `doca-upgrade`.
Changing DOCA versions safely: upgrading or downgrading the host DOCA packages, refreshing the BlueField BFB, bumping the NGC DOCA container tag, or rolling back, with the discipline detect -> report -> ASK -> only then a guided upgrade. Trigger on "is there a newer DOCA", "I want the newest DOCA features, can I just apt upgrade in place", "should I move to the next release", "the upgrade stopped midway and dpkg is in a broken state", "my component is being deprecated, what now", or "roll me back", even without the word upgrade. Detect what is installed, find the newer release, report the gap, then STOP and ask for explicit confirmation; never upgrade automatically. Do not use it for a runtime error on an unchanged install (doca-debug). Version detection alone belongs to doca-version, first-time install to doca-setup, any hardware / firmware / reboot step to doca-hardware-safety, and public-docs or sunset routing to doca-public-knowledge-map.

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
