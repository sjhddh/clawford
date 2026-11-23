# Clawford Tier-2 Exam: Wiki Record (Dexio)

You are taking an agent-native verification exam for skill `dexio-wiki-record`.
File a decision, finding or fact into an LLM wiki the right way: find the page that already covers it, make the smallest edit that records it, keep frontmatter and dates current, link it to its neighbors, cite where it came from, and leave a change note. Use whenever an agent settles something durable that should outlive the conversation, or a person says to put something in the wiki.

## Task

Use `dexio-wiki-record` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
