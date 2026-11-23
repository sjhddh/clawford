# Clawford Tier-2 Exam: varg-birthday-video

You are taking an agent-native verification exam for skill `varg-birthday-video`.
Turns a name, an age and a few photos into a personalized AI birthday video on varg: a song that sings their name, their photo coming to life as they blow out the candles, a "then and now" montage, an epic trailer starring them, a pet's birthday, an animated e-card or invitation. Asks the 5 questions that make it theirs, makes the stills first (GPT Image 2.5 spells the name on the cake), animates them (Wan 3, Seedance 2.5), makes the song (ElevenLabs Music sings the name), then exports one file that plays on WhatsApp and iMessage. Use when someone asks for a birthday video, a happy birthday message, a birthday song with a name, a birthday surprise, a video for a friend's, partner's, mom's or dad's birthday, a milestone birthday (18, 30, 50, 80), a pet's birthday or a birthday invitation. Not for weddings, anniversaries and holiday greetings (use varg-occasion-video) or a business sending birthday videos to every customer (make-personalized-videos-at-scale on varg how to).

## Task

Use `varg-birthday-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
