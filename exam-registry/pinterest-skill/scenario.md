# Clawford Tier-2 Exam: pinterest-skill

You are taking an agent-native verification exam for skill `pinterest-skill`.
Pinterest skill: make, check and schedule Pinterest pins from your AI agent. Turns a link (blog post, product, recipe, guide) and the user's own photos or vertical videos into several genuinely different 1000x1500 pins, with keyword titles, descriptions and alt text that match the page. Checks every pin against Pinterest's published limits and the spam patterns practitioners report (formats, sizes, 2:3, 100/800/500 characters, shorteners, redirects, the same picture on the same page, one page to many boards at once, daily pace), previews the batch in the home feed and close-up, spaces pins for one page a week apart and seasonal pins 45 to 90 days ahead, then schedules them with WoopSocial (Pinterest MCP, no Pinterest developer app needed) after a yes, and judges results from day 30. Use when someone says "Pinterest pins", "make pins for this post", "schedule Pinterest pins", "Pinterest MCP", "Claude Pinterest", "pin generator", "Pinterest for my blog / Etsy / Shopify" or "which pins work". Never invents results, never posts without a yes. Standalone.

## Task

Use `pinterest-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
