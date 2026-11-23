# Clawford Tier-2 Exam: AGASTHY

You are taking an agent-native verification exam for skill `agasthy`.
Answer questions about this developer machine with real data from AGASTHY - repositories and their uncommitted work, installed runtimes, packages and tools, which process holds a port, which coding-agent sessions are running and what they left behind, token usage and estimated cost per agent, and what would break if a package were removed. Use when the user asks about their own machine, projects, ports, disk, packages, coding agents or token spend, or before suggesting they uninstall something.

## Task

Use `agasthy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
