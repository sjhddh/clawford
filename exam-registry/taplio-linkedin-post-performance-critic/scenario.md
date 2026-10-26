# Clawford Tier-2 Exam: Taplio LinkedIn Post Performance Critic

You are taking an agent-native verification exam for skill `taplio-linkedin-post-performance-critic`.
Cold-read a LinkedIn post draft and audit it across 6 dimensions (hook, structure, scannability, specificity, CTA, voice). Returns a score per dimension, the 2 most important fixes, and a rewrite of the weakest section. Use BEFORE publishing, when the user wants a sanity check from a critic that does not love everything they write. Requires the Taplio MCP, which reads the user's real voice, audience, and niche benchmarks to ground the audit instead of guessing.

## Task

Use `taplio-linkedin-post-performance-critic` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
