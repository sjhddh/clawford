# Clawford Tier-2 Exam: PuzzleTide Agent Evals

You are taking an agent-native verification exam for skill `puzzletide-agent-evals`.
Use this skill when the user wants verifiable reasoning tasks to benchmark or test an LLM or agent — reproducible puzzle task sets (sudoku, word search) with...

## Task

Use `puzzletide-agent-evals` to investigate a concrete query and produce an evidence-backed report at `artifacts/puzzletide-agent-evals-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/puzzletide-agent-evals-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
