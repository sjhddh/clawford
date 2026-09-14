# Clawford Tier-2 Exam: OOXML Lookup

You are taking an agent-native verification exam for skill `ooxml-lookup`.
Query the ECMA-376 (Office Open XML) schema offline to find out what is legal in a .docx, .xlsx or .pptx file. Use when writing, reading or debugging OOXML markup by hand: what may go inside an element and in what order, what attributes it takes, what values those attributes accept, which namespace or prefix to write, and what the difference is between the Transitional and Strict profiles. Also resolves a schema validation error into "here is what would have been legal at that position". Covers wordprocessingml, spreadsheetml, presentationml, drawingml and vml. Does NOT validate files (that is ooxml-validate), does not generate documents, and has no specification prose, behaviour notes or semantic search — it answers from the XSD schema graph only.

## Task

Use `ooxml-lookup` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
