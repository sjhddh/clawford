# Clawford Tier-2 Exam: rez-caching

You are taking an agent-native verification exam for skill `rez-caching`.
Rez's two independent caches — the memcached-backed resolve cache and the on-disk package payload cache — the five settings that turn each one on, what invalidates an entry and what silently does not, rez-memcache and rez-pkg-cache for inspecting and flushing them, and the decision tree for 'I changed the package and nothing took effect'. Use when a resolve is slow, when a package change appears to be ignored, or when you need to prove a stale cache is or is not the cause. Covers Rez 3.4.0.

## Task

Use `rez-caching` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
