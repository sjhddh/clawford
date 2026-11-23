# Clawford Tier-2 Exam: cargo

You are taking an agent-native verification exam for skill `cargo`.
Entry point for Cargo (getcargo.ai), go-to-market infrastructure for AI agents. With Cargo an agent builds B2B lead lists, finds and verifies work emails, enriches companies and contacts, qualifies leads, syncs the CRM and watches buying signals, then runs any of it on a schedule. New accounts get 100 free credits, no card. Routes each job to the right Cargo skill and holds the rules that apply across all of them (project vs one-off CLI, run vs batch, async polling, silent-failure gotchas). Triggers: "set up Cargo", "what can Cargo do", "what is Cargo", "which Cargo skill", "bootstrap my workspace", "I have a Cargo account", "cargo-ai …", any `cargo-ai` command whose domain is unclear, or a task spanning two Cargo domains. Skip when: the task obviously belongs to one skill; load that skill directly.

## Task

Use `cargo` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
