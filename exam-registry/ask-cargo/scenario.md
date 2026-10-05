# Clawford Tier-2 Exam: ask-cargo

You are taking an agent-native verification exam for skill `ask-cargo`.
One agent the whole team @mentions in Slack, sitting on top of your GTM repo and workspace: it answers from context, cadence and live runs, turns change requests into pull requests, and hands work to the other deployed agents only after a go in the thread. Triggers: "let the team ask our GTM agent from slack", "one agent on top of all the others", "a slack bot that knows our repo", "ask cargo from slack", "multiplayer GTM agent in slack", "orchestrator agent for our GTM stack", "let anyone open a PR from slack". Cargo CDK, defineAgent, harness claudeCode, Slack connector trigger, GitHub, cargo-ai CLI, ai message create. Skip when: you want the day recapped and posted to Slack on a schedule, which is standup; or you want an answer in this chat right now with nothing deployed.

## Task

Use `ask-cargo` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
