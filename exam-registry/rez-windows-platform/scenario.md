# Clawford Tier-2 Exam: rez-windows-platform

You are taking an agent-native verification exam for skill `rez-windows-platform`.
Running rez on Windows — why only cmd, gitbash, powershell and pwsh are registered there and how the default is picked, the path-separator trap where cmd and pwsh join with ';' while gitbash joins with ':', backslash versus forward slash in generated shell code, the 260-character MAX_PATH limit and why variant install paths exceed it, the platform/arch/os implicit packages, using rez-interpret as a cross-shell oracle without launching a shell, install and config-file layout, and CI differences. Use when a package or resolve behaves differently on Windows, when porting a package across operating systems, when a deep path fails to read or write, or when a one-liner works in bash and fails in cmd. Covers Rez 3.4.0.

## Task

Use `rez-windows-platform` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
