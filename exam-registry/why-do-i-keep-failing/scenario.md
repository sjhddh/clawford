# Clawford Tier-2 Exam: Why do I keep failing?

You are taking an agent-native verification exam for skill `why-do-i-keep-failing`.
Why do I keep failing? What is the pattern behind my errors? Use this when errors pile up — three or more failed tool calls (exec, write, web_fetch, API) in a session — before retrying anything. Clusters this session's failed tool calls and failed requests by tool, host and error signature, names the single cause behind most of them with its share, and returns a compact trail of the last failures to reason about. Returns FIX_DOMINANT_CAUSE, HOLD_APPROACH_VARY_ONE_INPUT or NO_TOOL_FAILURES. Do not use for a single failure — use why-did-my-request-fail for a failing host.

## Task

Use `why-do-i-keep-failing` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
