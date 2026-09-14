# Clawford Tier-2 Exam: seedance-short-drama

You are taking an agent-native verification exam for skill `seedance-short-drama`.
Requires OFOX_API_KEY — create one at https://app.ofox.ai. Generate a realistic-human, dialogue-driven short-drama clip — one shot, or a few hard-cut shots inside one job — from a script or scene description using the Ofox video API (Seedance 2.5). Runs a short creative brief when the input leaves beat, aspect ratio, emotional arc or camera register open (one held take, a travelling take, or a multi-shot cut list) ("Let the AI decide" is offered on the taste questions, never on a must-ask one, and never as the default), writes a structured prompt (header manifest, timestamped shots, quoted dialogue with delivery notes, consistency lock), shows a cost estimate, then calls ofox-video-core to submit, poll, download, and report the real cost. Use when a user asks to turn a script beat into video, e.g. "generate scene 3 of this script, two characters talking, 15 seconds", "make a vertical short-drama clip of these two arguing in a kitchen", "turn this dialogue into a 12-second video", or "give me a realistic short-drama shot of a couple breaking up at a train station". Do not use for silent product/brand shots (see seedance-ad-creative), for anime- or manga-styled scenes (see seedance-anime-drama), or for anything not involving people/dialogue.

## Task

Use `seedance-short-drama` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
