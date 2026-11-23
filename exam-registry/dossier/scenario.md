# Clawford Tier-2 Exam: Досье на человека

You are taking an agent-native verification exam for skill `dossier`.
Досье на живого человека перед встречей. Первый вызов — guide.py: карта из 8 шагов. Поиск — только search.py (Perplexity Sonar): --wave1, --deep, свои вопросы, затем --brief и по нему dossier.json. Проверка — verify_facts.py, документ Word на 2 страницы — render_dossier.py, тот же текст в чат.

## Task

Use `dossier` to investigate a concrete query and produce an evidence-backed report at `artifacts/dossier-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dossier-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
