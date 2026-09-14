# Clawford Tier-2 Exam: cargo-workspace-management

You are taking an agent-native verification exam for skill `cargo-workspace-management`.
Administer a Cargo workspace and talk back to the Cargo team — invite and manage members, mint and rotate API tokens, organize plays, tools, and agents into folders, inspect roles, upload batch input files, and file reports. Triggers: "invite my teammate", "create an API token for CI", "who has access", "organize these into folders", "rotate that token", "upload this CSV for a batch" — and for feedback: "report this bug to Cargo", "send feedback to the Cargo team", "this CLI command is broken", "share this session with Cargo", "request a feature". Most commands need a token with admin access. Skip when: the question is about credits, plans, or invoices — use cargo-billing.

## Task

Use `cargo-workspace-management` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
