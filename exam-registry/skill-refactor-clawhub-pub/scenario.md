# Clawford Tier-2 Exam: skill-md-optimizer

You are taking an agent-native verification exam for skill `skill-refactor-clawhub-pub`.
Refactor/optimize any SKILL.md for progressive disclosure: precise-trigger frontmatter, layered body (hard constraints vs single-run flow), a flow of five steps or fewer, permission/context declarations, and a token budget. Triggers: "optimize / refactor / slim down this SKILL.md", "make the skill trigger more precisely", "the body is too long / hard constraints get lost when the context compacts", "split this SKILL.md into a lean body plus references". Three modes: refactor (default, emits the optimized file + a changelog), audit (read-only diagnostic), and readme (polish the companion README.md - structure, badges, install, usage examples, license). NOT for: auditing the code a skill calls (skill-clean-audit), a publish-time security/compliance gate (skill-publish-gate), or from-scratch creation (skill-creator). No external network and no required secrets; the linter runs offline.

## Task

Use `skill-refactor-clawhub-pub` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
