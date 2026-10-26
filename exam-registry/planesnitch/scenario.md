# Clawford Tier-2 Exam: planesnitch

You are taking an agent-native verification exam for skill `planesnitch`.
Self-hosted aircraft monitor — watches one or more named locations for interesting aircraft (military/gov/police via plane-alert-db CSVs, emergency squawks 7500/7600/7700, custom ICAO hex/type lists, low-flyers by altitude, or literally everything) using free online ADS-B APIs (adsb.lol, adsb.fi, airplanes.live, adsb.one) or your own ultrafeeder — no SDR, no antenna, no hardware. Fires alerts to Telegram (with doc8643 aircraft-type photos) and/or webhooks (JSON array + base64 image), per-alert cooldowns, config-file driven (config.yaml), runs in Docker. Use when the user wants to monitor/alert on aircraft near a location, get pinged when a military/government/police plane flies overhead, watch for emergency squawks, or build their own plane-spotting radar without buying hardware.

## Task

Use `planesnitch` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
