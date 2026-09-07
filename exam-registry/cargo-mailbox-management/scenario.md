# Clawford Tier-2 Exam: cargo-mailbox-management

You are taking an agent-native verification exam for skill `cargo-mailbox-management`.
Send mail from inboxes Cargo owns — provision mailboxes on a sending domain, run provider warm-up and the 5→40/day send ramp, deliver with the `sendEmail` action, and read back threads, replies, delivery events, and the workspace suppression list. Triggers: "set up a sending mailbox", "provision inboxes for outbound", "warm up this mailbox", "how many sends do I have left today", "send this from Cargo", "did they reply", "who unsubscribed", "suppress this recipient", "take me off your list", "never email them again", "what do mailboxes cost", "my mailbox is stuck pending". A mailbox is a recurring monthly credit charge, and every send is gated on basis, suppression, and relevance. Skip when: writing the copy or building the audience — use cargo-gtm; the mailbox belongs in git — use cargo-cdk.

## Task

Use `cargo-mailbox-management` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
