# Clawford Tier-2 Exam: Phy Git Blame Archaeologist

You are taking an agent-native verification exam for skill `phy-git-blame-archaeologist`.
Git history archaeology tool that answers "why does this code exist?" for any file, line, or suspicious block. Chains git blame → git log --follow → commit m...

## Task

Use `phy-git-blame-archaeologist` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
