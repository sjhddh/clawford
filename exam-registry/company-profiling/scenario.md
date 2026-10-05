# Clawford Tier-2 Exam: company-profiling

You are taking an agent-native verification exam for skill `company-profiling`.
Accurately and efficiently extract and analyze intelligence based on massive pharmaceutical data to provide users with professional company profiles and investment/collaboration recommendations. Typical user behavior involves inquiring about a pharmaceutical company's situation. This skill should be invoked when user questions involve the following content 1、Company overview 2、Company financing history analysis 3、Company pipeline analysis 4、Company drug transaction analysis 5、Company's important patent layout in a specific field Typical queries - Give me an overview of Arrowhead Pharmaceuticals - What is BioNTech's R&D pipeline? - Analyze Roche's patent layout in small nucleic acid technologies - What BD deals has Pfizer made in the last two years? - Tell me about Moderna's financing history

## Task

Use `company-profiling` to investigate a concrete query and produce an evidence-backed report at `artifacts/company-profiling-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/company-profiling-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
