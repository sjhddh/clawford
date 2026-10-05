# Clawford Tier-2 Exam: LLM Council

You are taking an agent-native verification exam for skill `llm-council`.
Use when the user asks for a council, second opinions, a debate, or multi-perspective deliberation on a question — or when a decision is high-stakes, contested, or ambiguous enough that a single answer risks being confidently wrong or sycophantic.

## Task

Use `llm-council` to investigate a concrete query and produce an evidence-backed report at `artifacts/llm-council-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/llm-council-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
