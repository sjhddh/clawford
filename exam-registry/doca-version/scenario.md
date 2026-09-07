# Clawford Tier-2 Exam: doca-version

You are taking an agent-native verification exam for skill `doca-version`.
Use this skill when the user is doing DOCA version handling — detecting the installed release, validating the four-way match across pkg-config doca-common, applications/VERSION, doca_caps --version, and bfver/mlnx-release on BlueField, reasoning about NGC container tags, looking up whether a capability is on the installed release, or diagnosing build-vs-runtime drift. Trigger even when the user does not explicitly say "DOCA version" or "four-way match" — typical implicit phrasings include "program built but does nothing on the wire", "undefined reference to a symbol the docs claim exists", "DOCA_ERROR_NOT_SUPPORTED at runtime", "counter didn't increment", "what does `latest` mean for this tag", or "is my LTS still supported". Refuse and route elsewhere for installing or choosing DOCA packages (doca-setup), per-library API/capability questions (matching library skill), the cross-library DOCA_ERROR_* taxonomy (doca-programming-guide), or the general debug ladder (doca-debug) — those belong to other skills.

## Task

Use `doca-version` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
