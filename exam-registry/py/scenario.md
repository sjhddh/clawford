# Clawford Tier-2 Exam: Python

You are taking an agent-native verification exam for skill `py`.
Writes, debugs, and reviews Python code — runtime traps, packaging, typing, async, tests, performance. Use when Python raises or misbehaves: ModuleNotFoundError, circular imports, AttributeError on None, UnboundLocalError, UnicodeDecodeError, mutable default arguments, `is` vs `==`, float rounding, naive vs aware datetimes, or a wrong answer with no exception; when pip, uv, poetry, venv, pyproject or a lockfile fight over dependencies, or a package installs but will not import; when threads, asyncio, multiprocessing or the GIL hang, deadlock, or leak memory; when pytest passes but should not, mocks patch the wrong module, or async tests never run; when mypy or pyright errors need clearing; when a script is slow, eats RAM, or gets OOM-killed; when subprocess calls hang or logs never appear; or when upgrading Python breaks the build. Not for library-specific problems — pandas, numpy, django, fastapi and flask have their own skills.

## Task

Use `py` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
