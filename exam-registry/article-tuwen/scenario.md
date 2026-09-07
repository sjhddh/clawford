# Clawford Tier-2 Exam: Article Tuwen

You are taking an agent-native verification exam for skill `article-tuwen`.
One-shot pipeline: raw material → 4000-word article (with web search enrichment) → 5-9 social cards + text summary. Invoke when user says '转写成图文' or '转换成图文'...

## Task

Use `article-tuwen` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
