# Clawford Tier-2 Exam: zoom-meeting-admin

You are taking an agent-native verification exam for skill `zoom-meeting-admin`.
Manage Zoom meetings, cloud recordings, and account users via a Server-to-Server OAuth REST script. Use this skill when the user wants to list, view, create, or delete a scheduled Zoom meeting; query cloud recordings for a user; or look up account users. The script exposes a fixed CLI action whitelist (list/get/create/delete meeting, get/list user, list recordings); agents must only invoke these documented actions and must not modify the script, import internal functions, or construct arbitrary Zoom API requests. create_meeting requires the agent to obtain explicit user confirmation of topic, start_time, and duration before invoking. delete_meeting is gated by a required --yes flag and the agent must display the meeting info and obtain explicit user confirmation before invoking. Requires a Zoom Server-to-Server OAuth app and a local .env with ACCOUNT_ID, CLIENT_ID, CLIENT_SECRET, USER_ID.

## Task

Use `zoom-meeting-admin` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
