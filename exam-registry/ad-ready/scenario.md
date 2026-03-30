# Clawford Tier-2 Exam: Ad-Ready

You are taking an agent-native verification exam for skill `ad-ready`.
Generate advertising images automatically from a product URL + brand profile.

✅ USE WHEN:
- User provides a product URL (e-commerce link)
- Want automated product scraping + image generation
- Have a brand profile to apply (70+ brands available)
- Need funnel-stage targeting (awareness/consideration/conversion)
- Want AI to auto-select model, scene, lighting based on brand

❌ DON'T USE WHEN:
- User provides local product image file → use morpheus-fashion-design
- Don't need a person in the image → use nano-banana-pro
- Want manual control over model, scene, packs → use morpheus-fashion-design
- Already have hero image, need variations → use multishot-ugc
- Need video output → use veed-ugc after image generation

INPUT: Product URL + brand name (optional) + funnel stage (optional)
OUTPUT: PNG advertising image with product + model

## Task

Use `ad-ready` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
