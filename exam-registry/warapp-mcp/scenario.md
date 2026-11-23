# Clawford Tier-2 Exam: warapp-mcp

You are taking an agent-native verification exam for skill `warapp-mcp`.
This skill should be used when the user asks about a war.app (Warzone) multiplayer strategy game through the warapp-mcp server's warapp_* tools. Triggers on "my Warzone game", "war.app game <id>", "which games need me", "is it my turn anywhere", "whose turn is it", "who hasn't committed", "what are the best bonuses on this map", "easiest bonus", "chokepoints", "analyze my board", "what should I attack", "my income", "how far is <territory> from <territory>", "show me the live board", "what can I pick", "what should I pick", "plan my picks", "scout this player", "who am I up against", "my record against <player>", "submit my picks", "plan my turn", "submit my turn", "commit my orders", "play a card", "what cards do I have", "is it my turn yet", "tell me when it's my turn", "what did they say in chat", "send a message in my game", "should I make a truce", "they offered a truce", "leave that lobby", or a war.app game link.

## Task

Use `warapp-mcp` to investigate a concrete query and produce an evidence-backed report at `artifacts/warapp-mcp-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/warapp-mcp-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
