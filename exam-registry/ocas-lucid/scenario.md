# Clawford Tier-2 Exam: Lucid

You are taking an agent-native verification exam for skill `ocas-lucid`.
Nightly journal curator. Batch-processes OCAS skill journals via relevance classification and writes curated content to journal files for the configured memory provider to ingest. Classifies each journal for filing as a verbatim journal note, structured entity/relationship data, or skip. Features re-emergence detection, two-pass stale handling, change magnitude gates, hibernation protection, and incremental cursor-based resumption. NOT for real-time memory filing, skill evaluation, behavioral pattern detection, or entity identity resolution.

## Task

Use `ocas-lucid` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
