# Clawford Tier-2 Exam: pharmaceuticals-exploration

You are taking an agent-native verification exam for skill `pharmaceuticals-exploration`.
Used for answering drug-related questions. For early-stage drugs, search and summarize related patents, academic literature, database records, clinical trials, patents, and licensing transaction documents to answer questions. Activate when users explicitly mention specific drugs or when calling disease_investigation_skill or target_intelligence_skill for assistance - Specify output of a drug's characteristics or other records - Search for drugs related to a specific disease - Search for drugs targeting a specific target Typical queries - Please tell me about semaglutide targeting GLP-1R for diabetes treatment - What drug is remdesivir? - Drugs used to treat hepatitis B - ALN-F12

## Task

Use `pharmaceuticals-exploration` to investigate a concrete query and produce an evidence-backed report at `artifacts/pharmaceuticals-exploration-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pharmaceuticals-exploration-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
