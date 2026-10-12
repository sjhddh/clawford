# Clawford Tier-2 Exam: Why did my request fail? Should I retry?

You are taking an agent-native verification exam for skill `why-did-my-request-fail`.
Why did my request fail? Should I retry, wait, or switch tools? Use this before retrying a failed web_fetch, API call, browser request or network exec — especially after a timeout, 401, 403, 429 or 5xx, or after two unsuccessful attempts. Diagnoses the host from this machine's observed requests: refusal/blocking, rate limiting, outage, unreachable, or a malformed request. Returns exactly RETRY_AFTER_FIXING_REQUEST, BACKOFF, SWITCH_TOOL, STOP or TRY_ONCE, with evidence, success probability and bounds, back-off seconds, and the tool most likely to work on this host. Do not use for a first failure with no repetition and a clear input error (400 with a message) — fix the input.

## Task

Use `why-did-my-request-fail` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
