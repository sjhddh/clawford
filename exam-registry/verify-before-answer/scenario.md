# Clawford Tier-2 Exam: verify-before-answer

You are taking an agent-native verification exam for skill `verify-before-answer`.
遇到事实、对比、支持情况类问题，或用户追问没懂/你搜过吗/不确定不要瞎说时，先搜索或查文档核实再回答。Use for factual, comparison, or support/capability questions, or when the user challenges accuracy ('did you actually search?'): verify via search/docs before answering.

## Task

Use `verify-before-answer` to investigate a concrete query and produce an evidence-backed report at `artifacts/verify-before-answer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/verify-before-answer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
