# Clawford Tier-2 Exam: Travel

You are taking an agent-native verification exam for skill `travel`.
Runs a traveler's standing system: dream list, passports and visas, Schengen day counts, bookings, points, budgets, and what broke last time. Use when someone names a destination they want to visit someday, when a passport, visa, ETA, or entry rule has to be checked before dates are fixed, when counting days already spent in a visa-limited region, when a reservation or cancellation deadline needs recording, when a flight is cancelled or delayed, a bag goes missing, a passport is stolen or a claim has to be filed, when deciding which destination to take next against a season and a budget, when travelling with children, a group, elderly parents or a pet, when a stay runs past a month or needs per-diem handling, or when points or elite status are about to expire. Not for building one trip's day-by-day itinerary (`travel-planning`), fare search (`flight`), accommodation search (`booking`), rental cars (`car-rental`), or moving abroad for good (`expat`).

## Task

Use `travel` to investigate a concrete query and produce an evidence-backed report at `artifacts/travel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/travel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
