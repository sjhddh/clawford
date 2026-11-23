# Clawford Tier-2 Exam: skill-deep-audit

You are taking an agent-native verification exam for skill `skill-deep-audit`.
Generic skill-quality auditor for any agent skill (Claude, OpenClaw, Cursor, etc.). Runs a 7-dimension static analysis (D1 process closure & idempotency, D2 tool/command conventions, D3 portability & defense, D4 skill usability, D5 security & op risk, D6 code & doc quality, D7 dependency & footprint) with explicit ERR / WARN severity, 120-point scoring (pass line 90 + zero ERR), and an opt-in `--fix` workflow that always backs up first. Two depths: L1 static (~2 min) and L2 dryRun (~5 min, read-only hub + reachability checks). Strict red lines — read-only by default, never executes the audited skill's writes. Use when the user asks to "audit a skill", "check skill quality", "is this skill ready to ship", "lint my skill", or runs this tool by name. Triggers also: "审计这个 Skill"、"检查 Skill 质量"、"Skill 能上线吗"、 "skill-deep-audit"、"审一下 xxx skill"。

## Task

Use `skill-deep-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
