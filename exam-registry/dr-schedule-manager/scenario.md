# Clawford Tier-2 Exam: dr-schedule-manager

You are taking an agent-native verification exam for skill `dr-schedule-manager`.
Design and implement reliable scheduled or event-triggered automations for OpenClaw agents so changes to model, prompt, delivery, and policy take effect immediately on the next run. Use when cron jobs, daily briefings, reminders, digests, or background agents keep using stale models, stale prompts, stale session state, or detached execution contexts. Also use when standardizing automation architecture across multiple agents or converting brittle time-triggered workflows into reusable config-driven jobs.

## Task

Use `dr-schedule-manager` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
