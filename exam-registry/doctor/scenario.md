# Clawford Tier-2 Exam: Doctor

You are taking an agent-native verification exam for skill `doctor`.
Triages symptoms, reads lab results and medication risks, and says how urgent something is: emergency now, seen today, or safe to watch. Use when someone describes chest pain, a headache, fever, a rash, dizziness, abdominal or back pain, a cough that will not clear, a lump, or unexplained weight loss and wants to know whether to go to the emergency room; when blood work, imaging, or a screening letter needs reading; when two medicines or supplements may interact, a dose looks wrong, or a side effect started; when a long-term condition — blood pressure, diabetes, asthma, thyroid, cholesterol — needs targets and monitoring; when preparing for an appointment, a second opinion, or a referral; and for a child's fever, a mood or drinking screen, contraception and menopause, or an older relative's medication load. Not step-by-step first-aid drills (`first-aid`), therapy technique (`therapist`), or cycle, pregnancy, and baby tracking (`period`, `pregnancy`, `baby`).

## Task

Use `doctor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
