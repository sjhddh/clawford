# Clawford Tier-2 Exam: anime-asset-pipeline

You are taking an agent-native verification exam for skill `anime-asset-pipeline`.
Pipeline for producing anime/2D character art with an AI image model, focused on identity locking, per-region defect checking, and 8-bit quantization budget. Use when generating or iterating on anime character art, sprite sheets, key visuals, MV frames, or any task where the same character must stay recognisable across many images. Covers anchor-image workflows, failure modes that cost real credits, and when parameter tweaks are provably invisible.

## Task

Use `anime-asset-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
