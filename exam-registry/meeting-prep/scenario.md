# Clawford Tier-2 Exam: meeting-prep

You are taking an agent-native verification exam for skill `meeting-prep`.
The moment an external meeting is booked on anyone's Google Calendar, one card lands in Slack: who is joining, the open deal, the line that mattered last time, one recent public event, and an opener grounded in your positioning, with reschedules and cancellations threaded under it. Triggers: "tell me in slack whenever someone books", "a card for every external meeting", "briefer on our google calendar", "watch our calendars for new meetings with prospects", "post who is joining before each booked meeting". Cargo CDK, defineAgent, Google Calendar agent trigger, domain-wide delegation, getEvent, Slack postMessage, gtm_ native models, workspace context, webSearch. Skip when: you want one company looked into now, in this chat, which is research-account; or you want the call scribed after it happened, which is call-capture.

## Task

Use `meeting-prep` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
