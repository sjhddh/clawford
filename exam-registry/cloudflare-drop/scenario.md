# Clawford Tier-2 Exam: cloudflare-drop

You are taking an agent-native verification exam for skill `cloudflare-drop`.
Publish a static site (a folder of HTML/CSS/JS/images/fonts) to Cloudflare and get back a live, shareable URL in seconds. Use when you have a finished static page or site and need to hand someone a link they can open on any device — reports, mockups, one-off landing pages, AI-generated HTML, "give me a link I can share". Runs one packaged command (references/deploy.mjs) built on the Wrangler CLI, which is what Cloudflare's own agent guidance tells agents to use. Deploys permanently to your Cloudflare account when credentials are present, or as a 60-minute claimable preview when they are not — and says plainly which one you got. Bakes an expiry countdown into previews (matched to the real 60-minute limit; --ttl to shorten it), and supports optional server-side six-digit access-code protection with -otp for permanent links only. Unprotected delivery may fall back to a file; protected delivery fails closed.

## Task

Use `cloudflare-drop` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
