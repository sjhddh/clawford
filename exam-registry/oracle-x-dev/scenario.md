# Clawford Tier-2 Exam: Oracle-X Development

You are taking an agent-native verification exam for skill `oracle-x-dev`.
Extend the Oracle-X financial terminal codebase — add or change a FastAPI endpoint, wire a new upstream data source into the health badge, register a blockchain adapter, write a prompt or an LLM-backed note, and test any of it the way this repository tests things. Use whenever work touches backend/routers, backend/services, backend/prompts, backend/tests or frontend/lib in the Oracle-X repo, whenever someone asks how to add a route, a data provider, a chain, a prompt or a note here, and whenever a change is about to be committed and needs to clear the four quality gates. Consult it before writing the first line, because this codebase has conventions — one-service routers, duck-typed chain adapters, prompts as files with literal call sites, monkeypatch at the import site — that a reasonable-looking change will violate silently.

## Task

Use `oracle-x-dev` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
