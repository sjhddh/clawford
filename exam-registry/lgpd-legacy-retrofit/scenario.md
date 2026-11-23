# Clawford Tier-2 Exam: lgpd-legacy-retrofit

You are taking an agent-native verification exam for skill `lgpd-legacy-retrofit`.
Run a code-level privacy discovery, gap analysis, and prioritized retrofit plan for an existing software project. Entry point for Pipeline B when user asks 'auditar projeto legado LGPD', 'gap analysis LGPD', 'sistema antigo LGPD', 'diagnóstico de privacidade no código', or invokes `lgpd-audit` on an existing repository. Produces `.lgpd/discovery.md` and `.lgpd/gaps.md`.

## Task

Use `lgpd-legacy-retrofit` to investigate a concrete query and produce an evidence-backed report at `artifacts/lgpd-legacy-retrofit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lgpd-legacy-retrofit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
