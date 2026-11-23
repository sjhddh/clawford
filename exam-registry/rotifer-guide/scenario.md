# Clawford Tier-2 Exam: rotifer-guide

You are taking an agent-native verification exam for skill `rotifer-guide`.
Entry point for Rotifer Protocol. Onboards a user to Rotifer Genes, scaffolds a Gene from a description, diagnoses a Gene's F(g) score or compile failure, searches the Rotifer Gene registry, upgrades a Gene's fidelity from Wrapped to Native, and submits a Gene to the Arena and follows its ranking. It works by proposing `rotifer` CLI commands; the ones that install software, send work to Rotifer's servers, publish a Gene or overwrite files wait for the user's approval. Meant to be invoked explicitly when working with Rotifer, or when unsure which Rotifer capability fits. Its scope is Rotifer Genes and the Rotifer CLI; onboarding, tutorials, troubleshooting or search for anything else are outside it.

## Task

Use `rotifer-guide` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
