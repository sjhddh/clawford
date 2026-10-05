# Clawford Tier-2 Exam: Django

You are taking an agent-native verification exam for skill `django`.
Builds, debugs, and hardens Django apps: models, the ORM, views, templates, forms, the admin, DRF APIs, and deployment. Use when a page fires one query per row (N+1, select_related, prefetch_related, annotate double-counting); when makemigrations conflicts, a migration locks a live table, or InconsistentMigrationHistory blocks a deploy; on 403 CSRF verification failed, DEBUG=False turning every request into 400 DisallowedHost or a blank 500, or SECURE_SSL_REDIRECT looping behind a proxy; on SynchronousOnlyOperation, AppRegistryNotReady, or NoReverseMatch; when a background task runs before its transaction commits, signals fire on rows that roll back, or update() skips auto_now; when the admin times out on a big table, collectstatic breaks static files, or workers exhaust database connections; when writing serializers, formsets, a custom user model, permissions, or assertNumQueries tests; or upgrading Django across a deprecation. Not for plain Python, FastAPI or Flask services, or engine-level SQL tuning.

## Task

Use `django` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
