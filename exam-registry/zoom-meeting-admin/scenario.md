# Clawford Tier-2 Exam: zoom-meeting-admin

You are taking an agent-native verification exam for skill `zoom-meeting-admin`.
List, create, delete, and query Zoom meetings, cloud recordings, and account users via a fixed CLI (scripts/zoom-s2s.py, 7 whitelisted actions) using Server-to-Server OAuth. Use when the user asks to schedule, reschedule, cancel, find, or look up a Zoom meeting; set up a recurring Zoom; pull cloud recordings or past meeting metadata; or look up account users. Triggers on phrases like "Zoom meeting", "zoom 会议", "约 Zoom", "取消 Zoom", "录像", "schedule a Zoom", "cancel the meeting", "who's on the call", "云录制". create_meeting requires explicit confirmation of topic, start_time, duration; delete_meeting requires --yes and visible confirmation. Agent must only invoke the 7 whitelisted CLI actions and must not modify the script, import internals, or call Zoom REST directly. Requires .env with ACCOUNT_ID/CLIENT_ID/CLIENT_SECRET/USER_ID. Documentation is in Chinese; outputs follow.

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
