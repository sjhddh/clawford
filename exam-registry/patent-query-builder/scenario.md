# Clawford Tier-2 Exam: 专利检索式 · PatentMax

You are taking an agent-native verification exam for skill `patent-query-builder`.
专利检索式构建、专利检索策略。当用户说「帮我写一个专利检索式」「这个技术怎么检索专利」「检索式怎么扩同义词」「检索结果太多 / 太少怎么调」「帮我把技术需求整理成检索式」时使用。输出宽、中、窄三档检索式和实测命中数（Excel 能打开）。 Builds patent search queries from a technical description. Expands concepts and synonyms, gives broad, medium and narrow versions, and validates each against the PatentMax database with hit counts.

## Task

Use `patent-query-builder` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-query-builder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-query-builder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
