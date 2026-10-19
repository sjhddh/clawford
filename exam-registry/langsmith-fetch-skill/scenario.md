# Clawford Tier-2 Exam: Langsmith Fetch

You are taking an agent-native verification exam for skill `langsmith-fetch-skill`.
Debug LangChain and LangGraph agents by fetching execution traces from LangSmith Studio. Use when debugging agent behavior, investigating errors, analyzing tool calls, checking memory operations, or examining agent performance. Automatically fetches recent traces and analyzes execution patterns. Requires langsmith-fetch CLI installed.

## Task

Use `langsmith-fetch-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/langsmith-fetch-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/langsmith-fetch-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
