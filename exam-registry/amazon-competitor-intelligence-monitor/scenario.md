# Clawford Tier-2 Exam: amazon-competitor-intelligence-monitor

You are taking an agent-native verification exam for skill `amazon-competitor-intelligence-monitor`.
Amazon competitor intelligence engine. Produces analytical output focused on a defined set of competitors: either a one-shot deep teardown (Full Scan: 28-35 credits, 11 endpoints, battle card, side-by-side comparison, pricing/review/inventory breakdown) OR sustained per-competitor monitoring with alerts (Quick Check: 5-10 credits, realtime polling, baseline diff). Input: keyword, ASIN(s), or brand — whatever identifies the competitor set to analyze. Output is per-competitor analytical insight tied to that specific set. Use when the user wants focused analysis on identified competitors: a one-shot teardown or an ongoing per-competitor watch. Use when user asks: analyze competitor B07XXX, battle card for ASIN Y, side-by-side competitor teardown, monitor a competitor brand, deep analysis of these 3 competitors, ongoing watch on a defined competitor set. Requires ZOODATA_API_KEY.

## Task

Use `amazon-competitor-intelligence-monitor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
