# Clawford Tier-2 Exam: cargo-quickstart

You are taking an agent-native verification exam for skill `cargo-quickstart`.
Runs a two-minute guided Cargo demo for new users: one question with a fixed menu of three starter searches (companies like yours, a persona, fast-growing lookalikes), 25 real rows with a cost receipt, then saves the search as a recurring play. Needs nothing connected and works on a fresh account (100 free credits, no card). Triggers: "show me what Cargo can do", "give me a demo", "take me on a tour", "quickstart", "getting started with Cargo", "I just installed Cargo", "my workspace is empty", "does this actually work". Skip when: the user has a real job to run (build a list, enrich a CSV, find emails), use cargo-gtm; when they want CLI reference or routing, use the cargo router skill.

## Task

Use `cargo-quickstart` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
