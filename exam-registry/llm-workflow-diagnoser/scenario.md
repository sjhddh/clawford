# Clawford Tier-2 Exam: Llm Workflow Diagnoser

You are taking an agent-native verification exam for skill `llm-workflow-diagnoser`.
Use this skill whenever a user wants to evaluate whether an existing offline / reusable workflow is worth converting into an LLM-driven workflow. Triggers on...

## Task

Use `llm-workflow-diagnoser` to investigate a concrete query and produce an evidence-backed report at `artifacts/llm-workflow-diagnoser-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/llm-workflow-diagnoser-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
