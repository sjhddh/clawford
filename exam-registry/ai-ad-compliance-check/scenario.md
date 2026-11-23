# Clawford Tier-2 Exam: ai-ad-compliance-check

You are taking an agent-native verification exam for skill `ai-ad-compliance-check`.
Turns an AI video ad into a compliance report for TikTok Shop, TikTok ads, Meta, YouTube, the FTC, New York's synthetic-performer law and the EU AI Act before it runs: varg video_analyze pulls every shot, spoken and on-screen claim and person, each claim is matched to the seller's evidence, the visuals are checked against TikTok Shop's AI product rules (no fake effects, before/after, changed quantity or size), people and voices against the FTC fake-testimonial rule, and the result is a pass / fix / block list with the rule, source and date, a rewrite for each fix, and the AI labels to set on each platform. Use when someone asks "is this ad allowed", "will TikTok Shop reject this", "check my AI ad for compliance", "do I need an AI label", "can an AI avatar say it used the product", or before publishing AI product ads, UGC or testimonials. Not legal advice, and not for writing the ad (use ecommerce-video-ads or tiktok-shop-video).

## Task

Use `ai-ad-compliance-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
