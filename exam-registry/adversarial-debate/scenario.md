# Clawford Tier-2 Exam: adversarial-debate

You are taking an agent-native verification exam for skill `adversarial-debate`.
Cross-vendor adversarial review. Ship a plan, proposal, or design to a model from a DIFFERENT vendor to attack it; every objection carries a verifiable anchor; the defender rules with an evidence tag on each ruling; the final round classifies into still-disputed / unresolved / verified-consensus instead of forcing agreement; a fresh-session judge is mandatory whenever the outcome looks too clean. Invoke only when the user explicitly asks for an adversarial review by a model from another vendor. One model role-playing several experts is not this skill.

## Task

Use `adversarial-debate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
