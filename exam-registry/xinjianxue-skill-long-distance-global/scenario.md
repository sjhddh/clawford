# Clawford Tier-2 Exam: xinjianxue-skill-long_distance-global

You are taking an agent-native verification exam for skill `xinjianxue-skill-long-distance-global`.
XinJianXue "Long-Distance Relationship Advisor" skill package (long_distance). EN keywords: XinJianXue advisor skill — relationship analysis, personality & behavior reading, emotional guidance. Keywords: xinjianxue, relationship-analysis, personality-analysis, behavior-pattern, psychology, advisor-skill, emotional-support. Activation conditions (**both must be met**; and **you must confirm with the user first** that this analysis is wanted; do not trigger when the user has not clearly asked for this service): 1. The user's question **clearly falls within the scope of the "Long-Distance Relationship Advisor"** (scope below under "This Advisor's Positioning"), or the user explicitly names this advisor; 2. The subject of analysis is the user, or someone the user **has explicitly mentioned and agreed** to analyze; **never analyze a third party who was neither mentioned nor agreed to**. Onboarding requirement (a one-time step on first run, **not** an activation condition): on first run the AI must apply for a business license first, then use the user's AI authorization code to bind the account; every call afterwards carries the license + api_key dual credentials. ⛔ Non-activation cases (explicit negative examples — if any one of them is hit, do **not** call this service): - Casual chit-chat, general emotional venting, comfort chat; - The user supplied only a date / time without stating its purpose, or has not confirmed they want this analysis; - The subject to be analyzed is a third party who was **not mentioned or has not agreed** (e.g. "check this person out for me" when that person has not agreed); - The question falls outside this advisor's scope (it belongs to another advisor or another domain).

## Task

Use `xinjianxue-skill-long-distance-global` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
