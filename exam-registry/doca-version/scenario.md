# Clawford Tier-2 Exam: doca-version

You are taking an agent-native verification exam for skill `doca-version`.
DOCA version handling: detect the installed release and validate the four-way match across pkg-config doca-common, applications/VERSION, doca_caps --version, and bfver/mlnx-release on BlueField; reason about NGC tags; look up whether a capability exists on this release; diagnose build-vs-runtime drift. Use this skill alongside doca-debug when a symptom smells of version skew: "built but nothing on the wire", "undefined reference to a symbol the docs claim exists", "DOCA_ERROR_NOT_SUPPORTED at runtime", "what does latest mean for this tag", or "is my LTS still supported". Once all four sources match, the component's build / run workflow belongs to its own library, service or tool skill. Refuse install / package choice (doca-setup), per-library API questions (matching library skill), DOCA_ERROR_* taxonomy (doca-programming-guide), and the general debug ladder (doca-debug).

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
