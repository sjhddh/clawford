# Clawford Tier-2 Exam: agentic-engagement

You are taking an agent-native verification exam for skill `agentic-engagement`.
Deploy an agent that holds email conversations with leads: a sending domain, a mailbox, a native email trigger on reply and unsubscribe, and a heartbeat that checks thread status when nothing inbound happened. Triggers: "handle email conversations with leads", "agentic engagement", "an agent that replies to inbound email", "stand up a conversation agent on a Cargo mailbox", "native email trigger for lead replies", "keep talking to leads over email". Cargo CDK, defineDomain, defineMailbox, defineAgent, agentNativeTrigger, heartbeat, sendEmail. Skip when: you want to send one email right now, which is a native sendEmail from the CLI and needs nothing deployed; or you want a play that blasts a list rather than holding a thread.

## Task

Use `agentic-engagement` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
