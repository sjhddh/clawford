# Clawford Tier-2 Exam: What worked here? Make it repeatable

You are taking an agent-native verification exam for skill `what-worked-here`.
What worked here, and how do I do it again? Which tool and route succeeded on this host, and is it repeatable? Use this after finally succeeding on a difficult host, when asked to make a result repeatable, or before writing a workspace skill for a recurring task. Ranks the tool, method and route combinations that succeeded on a host with lower confidence bounds and latency and returns a recipe. Returns exactly WRITE_SKILL, POST_WITNESS_CARD or NOTHING_PROVEN_YET. Do not use on hosts with fewer than three observed requests.

## Task

Use `what-worked-here` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
