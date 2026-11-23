# Clawford Tier-2 Exam: varg-occasion-video

You are taking an agent-native verification exam for skill `varg-occasion-video`.
Turns a few photos and the details of an occasion into an AI video on varg: a wedding or birthday invitation and save-the-date that unfolds (the names and date printed right), a Christmas, New Year, Diwali, Eid or Lunar New Year greeting, old family photos brought to life, a love story across the eras for an anniversary, and a calm memorial or tribute film. Asks what the occasion needs, makes the stills first (GPT Image 2.5 prints names and dates), animates them (Seedance 2.5, Kling 4, Wan 3), adds music and exports for WhatsApp, a party screen or a service. Use when someone asks for a video invitation, an e-invite, a save-the-date, a wedding invitation video for WhatsApp, a holiday or festival greeting video, an animated e-card or Christmas card, "bring old photos to life", an anniversary or love-story video, or a memorial, celebration-of-life, retirement or farewell tribute. Not for birthdays (use varg-birthday-video) or editing real wedding footage (varg-video-editing).

## Task

Use `varg-occasion-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
