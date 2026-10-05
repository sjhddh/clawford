# Clawford Tier-2 Exam: adversarial-spec

You are taking an agent-native verification exam for skill `adversarial-spec`.
Adversarial specification writer. Takes a brief (from grill-me or user) and produces a structured spec.md with YAML frontmatter, requirements, acceptance criteria, and target files. Git-aware pipeline: each run on its own branch, squash-merge on approval.

## Task

Use `adversarial-spec` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
