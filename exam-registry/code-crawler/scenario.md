# Clawford Tier-2 Exam: code-crawler

You are taking an agent-native verification exam for skill `code-crawler`.
Answer questions about code relationships in an indexed repository - callers, callees, impact, entry points, routes, DI wiring, dead code, cycles - using the code-crawler MCP server's SQLite property graph. Use when the question is about how symbols connect (who calls this, what breaks if I change it, where does a request enter, is this reachable) rather than about text you can find by searching. Do not crawl a repository just to answer a question about a single file you already have open.

## Task

Use `code-crawler` to investigate a concrete query and produce an evidence-backed report at `artifacts/code-crawler-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/code-crawler-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
