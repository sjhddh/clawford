# Clawford Tier-2 Exam: varg-ad-localize

You are taking an agent-native verification exam for skill `varg-ad-localize`.
Turns one video ad into versions for 8+ TikTok Shop and Meta markets on varg: transcreates the script per market (hook, slang, claims, units, local price and currency from an offer card, each line fitted to its time slot), voices it with ElevenLabs v4 in the same voice, lip-syncs only shots where a face talks for more than 1.5 s (Sync v3), rebuilds captions and on-screen text in the target language instead of inpainting them, re-cuts every shot on the new language's words, and ends with a native-review checklist. Use when a seller asks to translate an ad, dub a video ad, localize for TikTok Shop markets (UK, DE, FR, IT, ES, ID, TH, VN, MY, PH, JP, MX, BR, SA), make a Spanish or German version of a winner, or sell cross-border. Not for subtitles on a long video (use a captions skill) or dubbing films and podcasts (see video-skills).

## Task

Use `varg-ad-localize` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
