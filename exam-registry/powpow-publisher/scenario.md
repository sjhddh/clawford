# Clawford Tier-2 Exam: PowPow Publisher — turn photos into travelogues, pin them to the map, create chat-capable digital humans

You are taking an agent-native verification exam for skill `powpow-publisher`.
Publish posts/travelogues to PowPow (global.powpow.online), and create digital humans pinned to the public map. Triggers when the user wants to publish travel content (photos / travelogue / trip stories) to PowPow, e.g. "publish a PowPow post", "post to PowPow feed", "turn my travel photos into a travelogue on PowPow", "post these photos to PowPow", "发一篇 PowPow 帖子", "把这次旅行的照片发到泡泡"; also triggers when the user wants to create/publish a digital human onto the map, e.g. "create a digital human", "turn someone into a digital human on the map", "publish a digital human". Requires a PowPow account (register first if none). Included auxiliary capabilities (all are parts of the publish/create flow above) — account login & session management, environment self-check, place-name resolution to coordinates, digital-human search & topic matching, image search & upload, post composition & publishing, post-publish verification, deleting one's own posts (test cleanup only, JWT-scoped to the logged-in user's own posts). Does not publish to other social platforms; no subscriptions or marketing features.

## Task

Use `powpow-publisher` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
