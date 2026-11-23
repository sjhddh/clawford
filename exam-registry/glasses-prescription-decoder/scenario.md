# Clawford Tier-2 Exam: glasses-prescription-decoder

You are taking an agent-native verification exam for skill `glasses-prescription-decoder`.
Use when you get an eye exam and need to understand the paper prescription, compare it to your old one, or buy glasses online: decodes OD/OS/SPH/CYL/AXIS/ADD/PRISM into plain vision language, computes your exact lens type (single/progressive/bifocal), analyzes what CHANGED between two prescriptions, verifies online-order entry, and explains PD (pupillary distance) rules. Solves the 'this paper is a code and the optical shop wants $400' problem.

## Task

Use `glasses-prescription-decoder` to investigate a concrete query and produce an evidence-backed report at `artifacts/glasses-prescription-decoder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/glasses-prescription-decoder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
