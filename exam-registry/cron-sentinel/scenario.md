# Clawford Tier-2 Exam: cron-sentinel

You are taking an agent-native verification exam for skill `cron-sentinel`.
Monitor scheduled/cron jobs and get alerted when one fails OR silently never runs. Use this skill when the goal is reliability or failure-detection for a recurring task the user already runs or is setting up - e.g. 'how would I even know if my cron job silently stopped,' 'my backup didn't run and nothing warned me,' 'monitor my scheduled jobs,' 'alert me when a job fails,' 'add retries and a dead-man's switch to my cron,' or 'is my nightly task still actually running.' It wraps a scheduled command so each run is recorded (exit code, duration, redacted output tail) with optional retries and a timeout, then a watchdog flags both crashed jobs and overdue jobs that silently never ran. Do NOT trigger on plain scheduling requests with no monitoring need ('remind me at 5,' 'run this once tomorrow'), or on general cron-syntax questions ('what does * * * * * mean') - only when reliability or silent-failure detection is the actual ask. Runs a local, standard-library-only Python tool that executes the user's own command directly (no shell), keeps an owner-only state file under ~/.cron-sentinel/, and prints crontab lines for the user to add themselves. It never edits a crontab, creates scheduled tasks, uses the network, or requires elevated privileges.

## Task

Use `cron-sentinel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
