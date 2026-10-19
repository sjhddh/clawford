# Clawford Tier-2 Exam: pasm-npc

You are taking an agent-native verification exam for skill `pasm-npc`.
Game NPC agents built on the PASM cognitive engine. NpcAgent gives you an NPC with persistent memory (salience-aware eviction so landmark events are never pushed out by trivia), persona-weighted action selection (temper/energy/play drive the baseline), and feedback-driven shaping - praise or scold a SPECIFIC action and the behaviour distribution actually moves. Emotion modulates replies. Growth stages unlock new actions (wave/hop/peek -> ball -> dance/spin -> think). Zero LLM dependency, offline-runnable, state persists to ~/.pasm-agents/<id>/. Tier label (light/core/bionic) exposed on every agent so callers always know which engine path is live.

## Task

Use `pasm-npc` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
