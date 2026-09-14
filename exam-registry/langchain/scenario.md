# Clawford Tier-2 Exam: LangChain

You are taking an agent-native verification exam for skill `langchain`.
Builds and debugs LangChain apps in Python: LCEL chains, agents, tools, retrievers, streaming, and structured output. Use when writing or reviewing a chain, agent, tool, retriever, or prompt template; when a prompt raises KeyError or "missing variables"; when streaming arrives as one blob or astream_events yields nothing; when an agent loops until GraphRecursionError or repeats a tool; when tool calls fail validation or the provider rejects a tool_call_id; when chat history disappears or the context window overflows; when with_structured_output returns None or a parser crashes on valid JSON; when retrieval returns the wrong chunks; when LangSmith traces are empty; when retries, rate limits, or token cost need bounding; or when imports break after an upgrade. Covers LangGraph state, checkpointers, and middleware. Not for framework-agnostic agent architecture (agents), retrieval design (rag), or chunk tuning (rag-chunking).

## Task

Use `langchain` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
