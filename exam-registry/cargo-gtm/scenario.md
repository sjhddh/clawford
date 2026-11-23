# Clawford Tier-2 Exam: cargo-gtm

You are taking an agent-native verification exam for skill `cargo-gtm`.
Default Cargo (getcargo.ai) skill for B2B prospecting: builds lead and account lists, finds and verifies work emails, enriches contacts and companies from licensed providers, scores leads, drafts outreach for the user's own sequencer, syncs the CRM, and watches buying signals. Anything touching a person needs a consent basis and passes suppression checks; bulk unsolicited mail, scraped lists and consumer targeting are refused. Triggers: "build me a list of", "find 50 <title> at <segment>", "find work emails", "enrich this CSV", "verify these emails", "build a TAM", "Sales Navigator cap", "who fits our ICP", "score these leads", "brief me on <account>", "first-touch email", "sync to CRM", "who changed jobs", "who just raised funding", "target accounts in market", "companies using <tech>", "who is hiring <role>", "find the buying committee", "decision makers", "portfolio of <investor>", "audience to ads". Providers: salesNavigator, aiArk, and 53 more. Skip when: a past run misbehaved, use cargo-diagnostics.

## Task

Use `cargo-gtm` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
