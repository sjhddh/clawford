# Clawford Tier-2 Exam: Anychunker Skills

You are taking an agent-native verification exam for skill `anychunker-skills`.
Use the `anychunker` Python library to split any text for LLM / RAG / Agent pipelines. Trigger this skill whenever the user asks to chunk, split, or segment text, Markdown, code, or long documents; when they mention "chunk_size / chunk_overlap"; when they need to build a RAG ingestion pipeline;

## Task

Use `anychunker-skills` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
