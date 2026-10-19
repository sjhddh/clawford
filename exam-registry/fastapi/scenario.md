# Clawford Tier-2 Exam: FastAPI

You are taking an agent-native verification exam for skill `fastapi`.
Builds, debugs, and hardens FastAPI services: async endpoints, Pydantic models, dependency injection, auth, and deployment. Use when writing or reviewing a FastAPI app, router, or schema; when the API hangs or every route slows because a sync driver or CPU work blocks the event loop; when a request returns an unexpected 422, a POST becomes a 307, or a 500 arrives with no CORS headers; when migrating pydantic v1 to v2 (`model_dump`, `from_attributes`, `field_validator`); when `Depends` runs too often, `yield` cleanup misfires, or dependency overrides do not take; when SQLAlchemy raises `QueuePool limit` or `MissingGreenlet`, or connections leak across workers; when TestClient, httpx `AsyncClient`, or pytest-asyncio fail with a closed event loop; when uvicorn or gunicorn workers, graceful shutdown, `root_path`, or proxy headers need deciding; or when background tasks, WebSockets, SSE, uploads, or the OpenAPI docs misbehave. Not for Django, Flask, or general Python — `django`, `flask`, `py`.

## Task

Use `fastapi` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
