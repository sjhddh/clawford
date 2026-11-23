# Clawford Tier-2 Exam: pasm-agent-authoring

You are taking an agent-native verification exam for skill `pasm-agent-authoring`.
The base kit for building agents on the PASM cognitive engine. Ships a BaseAgent SDK (observe / recall / mood / act / feedback / save with persistent JSON state), an agent framework (registry, isolated repo probing, scenario simulation harness, core-contract check toolboxes) and a skill-packaging library producing the two archive layouts platforms require. Write an agent by subclassing BaseAgent and implementing an action pool plus a reply template; the engine tier (light / core / bionic) is always reported, never hidden. Zero LLM dependency, offline-runnable, stdlib only.

## Task

Use `pasm-agent-authoring` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
