# Clawford Tier-2 Exam: cargo-cdk

You are taking an agent-native verification exam for skill `cargo-cdk`.
Manage a whole Cargo workspace as code — declare connectors, models, plays, tools, agents, MCP servers, segments, context, folders, files, workers, and apps in TypeScript, then reconcile them with `cargo-ai cdk` (init → types → plan → deploy), the way you would run Pulumi or the AWS CDK. Triggers: "as code", "in git", "version-controlled", "reproducible", "Terraform for Cargo", "set up a whole workspace", "staging and production", "deploy from CI", "review this in a PR", "cargo.state.json", "scaffold from a template", "is there a cookbook for this", "start from a cookbook". Skills with a CDK example (TAM building, account scoring, contact sourcing, routing, AI SDR, rep cockpit) live in gtm-skills; menu in references/cookbooks.md. Skip when: it is a one-off operation, a read, or an ad-hoc query — use the matching capability skill.

## Task

Use `cargo-cdk` to investigate a concrete query and produce an evidence-backed report at `artifacts/cargo-cdk-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cargo-cdk-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
