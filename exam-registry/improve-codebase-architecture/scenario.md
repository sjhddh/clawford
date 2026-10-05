# Clawford Tier-2 Exam: improve-codebase-architecture

You are taking an agent-native verification exam for skill `improve-codebase-architecture`.
Surface architectural friction in a codebase and propose **deepening opportunities** — refactors that turn shallow modules into deep ones, informed by the project's `CONTEXT.md` glossary and `docs/adr/` decisions. Walks the codebase with an Explore sub-agent, applies the **deletion test** to suspected pass-through modules, presents a numbered list of candidates with files / problem / solution / benefits, and drops into a grilling loop once the user picks one — naming new concepts into `CONTEXT.md` inline and offering an ADR only when a rejection is load-bearing. Writes no production code. Use this skill whenever the user says "improve architecture", "improve the architecture", "architecture review", "find refactoring opportunities", "find deepening opportunities", "find shallow modules", "make this more testable", "this code is hard to navigate", or invokes `/improve-codebase-architecture` — even if they don't name the skill.

## Task

Use `improve-codebase-architecture` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
