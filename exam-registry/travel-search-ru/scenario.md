# Clawford Tier-2 Exam: Travel Search RU

You are taking an agent-native verification exam for skill `travel-search-ru`.
Use while planning a trip when Russian-catalog search is needed: package tours, hotels, flights, trains, excursions, prices, and booking links. Trigger on Russian requests: «спланировать путешествие», «подобрать тур», «найти отель/авиабилеты/жд билеты/экскурсии», «маршрут с актуальными ценами». Not for general advice without live search.

## Task

Use `travel-search-ru` to investigate a concrete query and produce an evidence-backed report at `artifacts/travel-search-ru-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/travel-search-ru-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
