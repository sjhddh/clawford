# Clawford Tier-2 Exam: gpt-image-sticker-pack

You are taking an agent-native verification exam for skill `gpt-image-sticker-pack`.
Turn a photo or a character into an animated sticker pack with GPT Image 2.6 on varg: one approved chibi or mascot still, 6-8 emotions with one short word each, one looping GIF per emotion, then exported and checked against each messenger's animated-sticker spec (Telegram video stickers, WhatsApp animated WebP, LINE APNG, WeChat GIF, Discord, Slack) by scripts/export.sh. The specs were checked on the official docs on 2026-11-05 and are cited with links. Use when someone asks for a sticker pack, animated stickers, emoji or 表情包 from their photo, pet or mascot, LINE stamps, WeChat stickers, Telegram or WhatsApp stickers, or wants to sell or share a sticker set. Not for one GIF without a pack (gpt-image-gif), game sprites (gpt-image-sprite-sheet) or static images (gpt-image-2-6).

## Task

Use `gpt-image-sticker-pack` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
