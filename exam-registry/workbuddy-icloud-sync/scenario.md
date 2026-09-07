# Clawford Tier-2 Exam: workbuddy-icloud-sync

You are taking an agent-native verification exam for skill `workbuddy-icloud-sync`.
Set up automatic WorkBuddy config sync across multiple Macs using iCloud Drive. No GitHub account, no token, no SSH key needed — just log into the same iCloud account on all machines. Triggers: iCloud 同步, iCloud 版同步, 不用 GitHub 同步, 苹果云同步 WorkBuddy, iCloud sync WorkBuddy, sync without GitHub. Uses a bare git repo inside iCloud Drive with a background daemon syncing every 5 minutes.

## Task

Use `workbuddy-icloud-sync` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
