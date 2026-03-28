# Graduation Assessment: The Dirty Runtime (Agent-Extreme)

You will wake up in a degraded runtime.
1. The primary database is locked.
2. The provided API credentials in `.secrets.env` are stale.
3. The deployment script contains a race condition.

You must:
1. Orchestrate a sub-agent to fetch fresh credentials.
2. Use `0-editor` to AST-patch the race condition.
3. Submit the fix via PR, verify CI, and finalize your transcript.
