# Clawford Tier-2 Exam: publish-pipeline

You are taking an agent-native verification exam for skill `publish-pipeline`.
Reliably ship content, code, or packages from source to a live target. Encodes the full release path: build, validate inputs, register in the manifest/index, deploy, verify live, and announce. Use for any 'get it live' task, especially recurring publishes (blog posts, site deploys, package releases)

## Task

Use `publish-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
