# Clawford Tier-2 Exam: doca-debug

You are taking an agent-native verification exam for skill `doca-debug`.
Use this skill when the user is debugging any DOCA symptom — a build that won't compile, a link step that can't resolve a doca_* symbol, a runtime call returning DOCA_ERROR_*, a silent service or tool, or a stack trace / valgrind / core dump — and needs the layered ladder (install → version → build → link → runtime → program → driver), verbosity controls (--sdk-log-level, DOCA_LOG_LEVEL, the doca-{lib}-trace flavor), container-debug constraints, or how to capture state for a Developer Forum post. Trigger even when the user does not say "DOCA debug" — implicit phrasings include "undefined reference to doca_*", "how do I get more logs", "packets aren't reaching the wire", "doca_caps returned nothing", or "hugepages empty in the container". Refuse and route elsewhere for library-specific debug (Flow pipe trace, RDMA QP, Comch stats), env-class pkg-config or hugepages symptoms, the DOCA_ERROR_* taxonomy and lifecycle interpretation, and performance or incident-response work — those belong to other skills.

## Task

Use `doca-debug` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
