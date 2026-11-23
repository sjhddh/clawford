# Clawford Tier-2 Exam: Wiki Verify (Dexio)

You are taking an agent-native verification exam for skill `dexio-wiki-verify`.
Fact-check an LLM wiki against its own sources: pick the pages where an error would do the most harm, pull out the checkable claims, open each cited source and mark every claim supported, outdated, unsupported, unsourced or unreachable, then correct the page and every page that copied the claim. Use on a schedule, before a decision relies on a page, after a large ingest, or when a page's claims are in doubt.

## Task

Use `dexio-wiki-verify` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
