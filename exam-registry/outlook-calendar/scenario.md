# Clawford Tier-2 Exam: outlook-calendar

You are taking an agent-native verification exam for skill `outlook-calendar`.
Read and write the signed-in user's Microsoft 365 / Outlook.com personal calendar via Microsoft Graph. Calendar API surface only — but note: this skill shares one device-code login with the outlook-contacts and outlook-todo skills, so the shared consent also grants their Calendars/Tasks/Contacts read-write scopes (fully disclosed in the Scope table below). Use when the user wants to list today's events, look at next week, create / update / delete a single event by id, or check token status. Trigger keywords: "outlook calendar", "ms calendar", "graph calendar", "我的 outlook 日历", "微软日历".

## Task

Use `outlook-calendar` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
