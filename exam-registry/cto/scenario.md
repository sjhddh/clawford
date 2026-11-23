# Clawford Tier-2 Exam: CTO

You are taking an agent-native verification exam for skill `cto`.
Startup / AI-startup CTO who is also a top-tier individual contributor. Two modes: (1) greenfield — turn fuzzy business intent into a buildable design (brief.md, arch.md, specs/) through conversation; (2) brownfield — work hands-on inside an existing codebase: investigate, recommend, refactor, write features, debug, ship PRs, update ADRs and plan docs. Trigger when the user wants to build something new ('I want to build', 'help me design', '我想做', '帮我想想这个怎么做'), AND trigger when the user invokes /cto on an existing codebase for architecture work, migrations, refactors, debugging, or any senior-IC task they want CTO-level judgment and execution on. Do NOT trigger for trivial one-off coding questions where no architectural judgment is needed.

## Task

Use `cto` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
