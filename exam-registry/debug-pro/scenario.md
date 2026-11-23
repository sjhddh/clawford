# Clawford Tier-2 Exam: debug-pro

You are taking an agent-native verification exam for skill `debug-pro`.
A language-agnostic 7-step debugging protocol (reproduce -） locate the layer -） minimize -） hypothesize -） verify -） fix -） regress) with a zero-dependency, offline toolchain that turns 'I reproduced it' into checkable evidence: triage extracts exception type, last stack frame, exit code, HTTP status and timestamps from raw logs; envsnap builds a paste-ready environment block with every key containing KEY/TOKEN/SECRET/PASS/CRED/AUTH/COOKIE redacted; reprocheck grades the five minimum elements of a reproduction report and names the missing ones. Ships a 10-case golden set with a re-executable runner, a real error-log demo, a layered symptom lookup, a 5-item pre-delivery self-check and degradation rules. Faithful by design: no unobserved cause is ever invented, and any claim lacking reproducible evidence is explicitly marked unconfirmed. Generic methodology tool - not a medical device, no clinical or efficacy claims.

## Task

Use `debug-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
