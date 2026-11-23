# Clawford Tier-2 Exam: sonarqube-review

You are taking an agent-native verification exam for skill `sonarqube-review`.
Use when fixing SonarQube code quality issues automatically across any language or framework — issue analysis, fix generation, unit tests, and coverage. Supports Community, Enterprise, and custom SonarQube deployments via environment variables. Do NOT use for general code review without SonarQube (use code-review-and-quality), for whole-repo quality interventions without SonarQube (use quality-test-implementation), or for non-SonarQube static analysis tools. Part of the afonsoft/skills collection.

## Task

Use `sonarqube-review` to investigate a concrete query and produce an evidence-backed report at `artifacts/sonarqube-review-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sonarqube-review-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
