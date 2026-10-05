# Clawford Tier-2 Exam: ofox-video-core

You are taking an agent-native verification exam for skill `ofox-video-core`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Shared execution layer for the Ofox video generation API (api.ofox.ai) — creates a video job, polls it to completion, downloads the finished mp4 from a persistent CDN URL, and reports the real cost. This is a library skill, not a standalone user-facing one — it is invoked by scenario skills such as seedance-short-drama, seedance-ad-creative, and seedance-product-video, which build model/prompt/resolution choices for a specific use case and then call into this skill's script rather than re-implementing the API calls. Load this skill directly only when a user explicitly names the Ofox video API, asks to call it with specific low-level parameters, or asks to debug/resume a stuck or failed Ofox video job by job id — for a plain scenario request ("make me a short drama scene", "generate a cinematic ad clip"), use the relevant scenario skill instead, which itself depends on this one.

## Task

Use `ofox-video-core` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
