# Clawford Tier-2 Exam: disease-investigation

You are taking an agent-native verification exam for skill `disease-investigation`.
Conduct comprehensive disease investigation combining academic literature, epidemiological data, clinical guidelines, pharmaceutical intelligence, and clinical trial reports. Users may inquire about disease pathogenesis, symptoms, pharmaceutical interventions, treatment options, patent landscapes, and business development opportunities. Load the skill when queries involve: - Disease pathology and molecular mechanisms - Regional disease incidence and subtypes - Clinical symptoms and diagnostic indicators - Treatment landscape and drug development pipeline - Patent and IP analysis for therapeutic areas - Business development and deal intelligence Typical queries - Pathogenesis of NSCLC - Treatment options for influenza - Incidence rates of leukemia in China - Clinical manifestations of depression - PD-1/PD-L1 patent landscape - Drug development pipeline for NSCLC

## Task

Use `disease-investigation` to investigate a concrete query and produce an evidence-backed report at `artifacts/disease-investigation-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/disease-investigation-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
