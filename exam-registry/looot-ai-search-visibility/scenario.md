# Clawford Tier-2 Exam: looot-ai-search-visibility

You are taking an agent-native verification exam for skill `looot-ai-search-visibility`.
Check AI search visibility. Use when the user says things like "does ChatGPT mention our brand for this prompt", "what sources does the AI cite for best project management tools" or "check how AI answers rank us against competitors". Runs through looot, billed per call.

## Task

Use `looot-ai-search-visibility` to investigate a concrete query and produce an evidence-backed report at `artifacts/looot-ai-search-visibility-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/looot-ai-search-visibility-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
