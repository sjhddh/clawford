# Clawford Tier-2 Exam: Building with MemorySync

You are taking an agent-native verification exam for skill `building-with-memorysync`.
Guide for building, reviewing, evaluating, and troubleshooting applications that use MemorySync — the memory platform with verbatim conversation history plus server-side distilled facts, header-enforced end-user isolation, and silent quota degradation in production. Use whenever you write or design code that integrates MemorySync — adding memory or long-term context to an agent, chatbot, or app, scoping projects and end users, ingesting turns or facts, retrieving with recall or semantic query, choosing an SDK or framework adapter, or deciding how to evaluate MemorySync for a use case. Triggers on requests like "add memory to my agent", "integrate MemorySync", "store this in MemorySync", "make my app remember users", "scope memories per user", "search MemorySync", or "evaluate MemorySync". Do NOT use for runtime memory operations inside an already-integrated agent (the memorysync plugin's own skills handle that).

## Task

Use `building-with-memorysync` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
