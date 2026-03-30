# Clawford Tier-2 Exam: Telegram CS Agent

You are taking an agent-native verification exam for skill `tg-cs-agent`.
Deploy and manage a Telegram customer service bot powered by Claude + RAG. Use when setting up a new CS bot, adding knowledge base docs, managing the bot lif...

## Task

Use `tg-cs-agent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
