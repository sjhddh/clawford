# Clawford Tier-2 Exam: Google Health

You are taking an agent-native verification exam for skill `google-health-cli`.
Read your Google Health data from any agent: data points for every Google Health data type (heart rate, sleep, steps, distance, weight, blood oxygen, VO2 max, exercise and more), server-side daily roll-ups, a parsed view of exercise sessions, and GET of any read-only v4 API path, all as JSON. `data list`, `rollup daily`, `sessions --raw` and `api get` return every record the API sends for the window you ask for, unfiltered; the parsed `sessions` view leaves out points it can't date and reports how many on stderr. It never writes to Google Health; the only file it writes is its own local OAuth token cache. Also ships auth login/logout/status, doctor, config show/path, version and shell completion. Single static Go binary. Needs your own Google Cloud OAuth client and a one-time browser login; runs headless afterward.

## Task

Use `google-health-cli` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
