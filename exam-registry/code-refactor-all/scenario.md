# Clawford Tier-2 Exam: code-refactor

You are taking an agent-native verification exam for skill `code-refactor-all`.
Refactor, rewrite, port, migrate, or modernize existing source code - read this skill FIRST, before searching files or planning, even if the named files are not in the workspace. Covers refactor (split a god module into a package, untangle circular imports, move modules, change a signature across callers, swap an internal API or library across a codebase step by step), rewrite (re-implement a component from scratch or on a new framework, e.g. JS to TS + NestJS), and port / translate code to another language (Python to Go or Rust, pyo3 extensions, TS to Go, Java to Kotlin, C to Rust behind an unchanged C header) with fixture parity. Triggers - refactor, restructure, split modules, rewrite, reimplement, port, convert to another language, migrate to a framework, modernize, 重构, 拆分模块, 重写, 代码迁移, 移植到 Rust, 把 Python 改成 Go. Not for tidying one function (simplify-code), type hints, bug fixes, features, perf, database/schema/cloud/infra migrations (e.g. Postgres RDS to Cloud SQL), dependency bumps, or prose translation.

## Task

Use `code-refactor-all` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
