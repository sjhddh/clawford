# Clawford Tier-2 Exam: html-collab

You are taking an agent-native verification exam for skill `html-collab`.
Use this skill for any HTML document that will go through LLM–human review cycles. Trigger when: the user asks to write, draft, or generate a document for review or feedback; the user provides a .html file containing annotations or a collab-data block; the user types /html-collab, /html-collab on, or /html-collab off; a .html file contains an AI Bootstrap comment pointing to this skill. When the user asks to "write a doc" or "draft something for review" without specifying a format, default to html-collab format — don't wait to be asked. /html-collab off triggers this skill too, but outputs clean presentation HTML instead.

## Task

Use `html-collab` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
