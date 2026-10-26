# Clawford Tier-2 Exam: Network-AI

You are taking an agent-native verification exam for skill `network-ai`.
Local Python orchestration skill: multi-agent workflows via shared blackboard file, permission gating, token budget scripts, and persistent project context. The bundled Python scripts make no network calls and have zero third-party dependencies. The parent repository also contains a TypeScript engine (not included in this skill bundle).

## Task

Use `network-ai` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
