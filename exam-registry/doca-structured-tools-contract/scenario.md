# Clawford Tier-2 Exam: doca-structured-tools-contract

You are taking an agent-native verification exam for skill `doca-structured-tools-contract`.
Use this skill whenever another DOCA skill says "prefer the structured tool per doca-structured-tools-contract", or when the user wants a one-shot answer that consolidates info multiple manual commands would produce — DOCA env / version / devices / capabilities / validate / host vs DPU state. Trigger even when the user does not explicitly mention "structured tool" or "doca-env --json" — typical implicit phrasings include "is there one command that tells me everything about my DOCA install", "what version is X capability available since", "every PF/VF/SF visible on this BlueField with PCIe address", "will this pipe pass validate before commit", "diff host vs DPU state", or "why does the agent give a one-line answer on host A and five commands on host B". Refuse and route elsewhere for general DOCA orientation, specific library API how-to, or install-from-scratch guidance — those belong to the per-library skill, doca-public-knowledge-map, or doca-setup.

## Task

Use `doca-structured-tools-contract` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
