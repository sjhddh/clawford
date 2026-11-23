# Clawford Tier-2 Exam: AI Call Opt-Out and Pre-Call Check

You are taking an agent-native verification exam for skill `ai-call-opt-out`.
Add opt-out handling and a pre-call check to an AI voice agent that makes outbound phone calls. Use when building or reviewing an outbound calling agent (Vapi, Retell, Bland, LiveKit Agents, Pipecat, ElevenLabs Agents, Twilio), or when the user mentions opt-out, revoke consent, do not call, stop calling, TCPA, 47 CFR 64.1200, robocall rules, key-press opt-out, or wasted calls and hang-ups. Wires in: a check before dialling (can this be done online instead, has this number opted out), a spoken opt-out disclosure, key-press opt-out capture, and an outcome report after each call. Also use it yourself before placing any phone call to a business with a phone-call skill: check the number first, and skip the call when the business can be booked online or has asked not to receive AI calls.

## Task

Use `ai-call-opt-out` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
