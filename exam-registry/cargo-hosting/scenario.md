# Clawford Tier-2 Exam: cargo-hosting

You are taking an agent-native verification exam for skill `cargo-hosting`.
Put something on the internet from Cargo — hosted web apps (Vite by default, other static frameworks detected) and serverless edge workers that answer HTTP requests, plus the deployments that build and promote them, the env vars and secrets a worker reads, running a worker locally, and custom domains and search indexing for public sites. Triggers: "build me a dashboard for this", "host this app", "give me a URL to share", "deploy this", "I need a webhook endpoint", "make it live", "promote to production", "ship a UI for my team", "give my worker an API token", "set a secret on the worker", "Missing CARGO_API_TOKEN", "my app cannot call my worker", "run the worker locally", "put it on my own domain", "make the site indexable by Google". Skip when: the app or worker should be declared as committed workspace code — use cargo-project.

## Task

Use `cargo-hosting` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
