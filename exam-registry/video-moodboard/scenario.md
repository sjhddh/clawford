# Clawford Tier-2 Exam: video-moodboard

You are taking an agent-native verification exam for skill `video-moodboard`.
Build a moodboard that AI image and video models actually follow, in the order that matters most, and prove it on stills before any video is paid for. Ranked from a 48-still test, 6,086 X posts and 14 official prompt guides: references, light, subject lock, framing, palette, motion, texture, type, sound. Every line is a number or a named thing (hex, Kelvin, lens mm, % of frame, film stock, font, seconds), never "cinematic". Writes moodboard.md and a visual board.html, checks test stills line by line (palette by ΔE), and links 450+ sources: reference libraries, palette, light, type and motion tools, vendor guides, benchmarks, creators' posts. Use for "make a moodboard", "mood board for my video", "style bible", "look and feel", "art direction", "visual brief", "make it not look like AI", or before prompting Seedance, Kling, Veo, Nano Banana or Midjourney. Not for finding references from scratch (find-references) or per-shot prompts after the board is approved (varg-video-prompting).

## Task

Use `video-moodboard` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
