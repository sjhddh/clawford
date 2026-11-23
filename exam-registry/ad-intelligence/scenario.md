# Clawford Tier-2 Exam: Ad intelligence

You are taking an agent-native verification exam for skill `ad-intelligence`.
When the user wants to see what a company is running in paid ads — on Meta (Facebook, Instagram, Threads), Google, LinkedIn and TikTok — what the ads say, which creatives have run longest, where they send people, and how the messaging differs by platform. Also use when the user mentions "competitor ads", "ad library", "what are they advertising", "ad teardown", "their Meta ads", "Google Ads transparency", "swipe file", "what hooks are they using", or wants to compare several advertisers. Input is one or more company names or domains; output is a per-advertiser teardown with every cited ad linked to its public ad-library page, plus a cross-advertiser comparison when there is more than one. Runs on Glasser (paid per call). For a company's whole competitive picture beyond ads, see competitor-research. For what is trending organically, see social-trends.

## Task

Use `ad-intelligence` to investigate a concrete query and produce an evidence-backed report at `artifacts/ad-intelligence-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ad-intelligence-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
