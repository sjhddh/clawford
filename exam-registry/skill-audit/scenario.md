# Clawford Tier-2 Exam: skill-audit

You are taking an agent-native verification exam for skill `skill-audit`.
Pre-publish security self-audit for OpenClaw skills. Point it at a skill folder and it walks the full ClawHub publishing checklist — code layer (eval/exec, network calls, sensitive file reads, obfuscation, dependencies), SKILL.md layer (curl|bash tricks, external scripts, trigger clarity, declaration-vs-behavior match), and release metadata (SemVer, changelog, license, slug, file types) — then emits a scored pass/fail report with concrete fixes. Use before `clawhub skill publish`, when the user asks to "audit my skill", "pre-publish check", "is this skill safe to publish", or wants to vet a third-party skill before installing it.

## Task

Use `skill-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
