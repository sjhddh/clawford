# Clawford Tier-2 Exam: 专利许可查询

You are taking an agent-native verification exam for skill `patent-license-records`.
专利许可查询、专利许可备案、专利实施许可。当用户问「这件专利有许可备案吗」「许可给哪家公司了」「帮我整理许可记录」时使用，输出公开许可记录表。 Look up publicly disclosed patent license recordation events and summarize dates, parties and terms only where returned by the data source, without inferring unrecorded contracts.

## Task

Use `patent-license-records` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-license-records-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-license-records-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
