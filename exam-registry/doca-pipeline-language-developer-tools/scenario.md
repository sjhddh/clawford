# Clawford Tier-2 Exam: doca-pipeline-language-developer-tools

You are taking an agent-native verification exam for skill `doca-pipeline-language-developer-tools`.
Use this skill when the operator is driving the DOCA Pipeline Language (DPL) Developer Tools to inspect or debug DPL programs on a BlueField DPU — DPL Nspect for runtime state such as tables, keys, and counters, DPL Debugger for packet flow, DPL Admin for dynamic configuration changes in the DPL Runtime Daemon, P4 Runtime Shell as a P4Runtime control plane manager, or DPL Runtime Controller SDK for custom P4Runtime applications and DPL shared memory APIs. Trigger even when the user does not explicitly mention "DPL Developer Tools" — implicit phrasings include "inspect the DPL tables on the DPU", "why can't I start a DPL debug session", "change a dpl_rtd configuration item without restarting", "build my own P4Runtime app for DPL", or "visualize packet flow through my DPL program". Refuse and route elsewhere: authoring, compiling and deploying DPL programs to the DOCA Pipeline Language Service Guide, DOCA install/bring-up to doca-setup, and hardware or firmware state changes to doca-hardware-safety.

## Task

Use `doca-pipeline-language-developer-tools` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
