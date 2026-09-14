# Clawford Tier-2 Exam: GTM Tools

You are taking an agent-native verification exam for skill `gtm-tools`.
Set up and call the gtm-tools API from any agent — get an API key (including fully autonomous self-registration), connect the browser-session pool, then use all 63 LinkedIn, Reddit, email-finding, buying-signal, and geocoding tools over Bash + curl. Use this skill whenever the user wants to install / set up / connect / onboard gtm-tools, asks how to get a gtm-tools API key, hits a 401 / 402 / "Unauthorized" / "Insufficient tokens" from api.gtm-tools.sh, asks what tools or what token costs are available, asks to check their token balance or top up, asks which LinkedIn or Reddit accounts are connected, asks to install the browser extension, or names any gtm-tools tool (get_linkedin_company_url, get_email, detect_signal, list_linkedin_company_employees, get_reddit_post, …) without a workflow skill already loaded. This is the base capability skill — for full drafting workflows use outbound-sales, linkedin-copywriter, or reddit-community-manager instead.

## Task

Use `gtm-tools` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
