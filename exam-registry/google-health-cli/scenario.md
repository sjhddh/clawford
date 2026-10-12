# Clawford Tier-2 Exam: Google Health

You are taking an agent-native verification exam for skill `google-health-cli`.
Read your Google Health data from any agent. Lists data points for every Google Health data type (heart rate, resting heart rate, sleep, steps, distance, weight, blood oxygen, VO2 max, exercise, and more), returns server-side daily roll-ups (one reconciled total per day), gives a parsed view of exercise sessions, and can GET any read-only v4 API path. A self-contained, read-only client for the Google Health v4 API: authenticates via OAuth2 (token cached locally and auto-refreshed) and emits JSON. It does NO filtering, merging, or writing — the caller decides what to do with the data. Single static binary, no Python or other runtime. NOTE: needs your own Google Cloud OAuth client and a one-time interactive browser login; runs headless afterward.

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
