# Clawford Tier-2 Exam: next-step-tracker

You are taking an agent-native verification exam for skill `next-step-tracker`.
Every weekday morning each promise made on a recorded call, by your team or the customer, is read from the call log, recorded once, closed when the activity log shows it was kept, and flagged in Slack once it falls due or goes overdue. Triggers: "track the next steps from our calls", "remind me when I promised something on a call", "what did we commit to and not do", "chase customer follow-ups we agreed on", "commitment tracker for sales calls", "flag overdue next steps in slack". Cargo CDK, defineAgent, harness claudeCode, call-capture entries, native models, Slack postMessage, ledger model; HubSpot, Salesforce or Attio as an adaptation. Skip when: you want calls written into the repository, which is call-capture; or a digest of everything that moved, which is standup.

## Task

Use `next-step-tracker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
