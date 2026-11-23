# Clawford Tier-2 Exam: trade-show-exhibitors

You are taking an agent-native verification exam for skill `trade-show-exhibitors`.
Build the exhibitor list of a trade show and, when wanted, the people who were there: exhibitor companies from the show's catalog (name, website, LinkedIn, country, hall, stand, categories), each judged against the kind of company the user wants (targetFit, companyType), plus people with public evidence of attendance (LinkedIn posts and comments, company news) and booth staff by role, each with a score. Compares the Sherwood Apify Actor, the unaffiliated Skython exhibitor list Actor, a generic crawl of the show's own exhibitor page and LinkedIn event pages read by hand. Use when the user says "trade show exhibitors", "exhibitor list of <show>", "who exhibited at <show> <year>", "who attended <trade show>", "trade show leads", "booth staff of the exhibitors at <show>", "which exhibitors at <show> sell <product>". Out of scope: visitor registration lists, emails and phone numbers, conferences without an exhibitor catalog.

## Task

Use `trade-show-exhibitors` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
