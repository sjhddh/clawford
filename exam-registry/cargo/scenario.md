# Clawford Tier-2 Exam: cargo

You are taking an agent-native verification exam for skill `cargo`.
Router for the Cargo CLI skill bundle — load first for anything Cargo, and whenever a task spans two Cargo domains. Explains what each skill owns, declarative workspace-as-code (cargo-cdk) vs the imperative CLI, the UUID and slug flow between skills, async polling of runs and batches, end-to-end use cases, and the gotchas that fail silently (`conjonction` spelling, run vs batch, model-uuid vs segment-uuid). Triggers: "set up Cargo", "what can Cargo do", "which Cargo skill", "bootstrap my workspace", "I have a Cargo account", "cargo-ai …", or any `cargo-ai` command whose domain you are unsure of. Skip when: the task obviously belongs to one skill — load that skill directly.

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
