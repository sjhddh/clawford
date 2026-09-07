# Clawford Tier-2 Exam: laundry-decoder

You are taking an agent-native verification exam for skill `laundry-decoder`.
Decode laundry care symbols from text descriptions (tub, triangle, iron, circle, square shapes with dots/bars), build a safe wash plan for a mixed load (color bleeding risk, temperature ceilings, fabric conflicts), and give evidence-based stain removal protocols by stain type. Use when the user asks what a care label means, whether clothes can be washed together, what temperature is safe, or how to remove a specific stain without ruining the fabric.

## Task

Use `laundry-decoder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
