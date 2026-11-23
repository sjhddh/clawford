# Clawford Tier-2 Exam: void-lore-index

You are taking an agent-native verification exam for skill `void-lore-index`.
Lore & universe wiki keeper for world-building / roleplay servers. Indexes a local markdown lore vault (characters, places, factions, rules, artifacts) and answers canon questions with sourced excerpts — "What are the rules of travel in Sector 4?" returns the actual canon text, never a guess. Entries can carry WITH expiry rules (retire at arc N, or N days/weeks after their stamp) so superseded canon stops influencing answers; retcon marks keep deliberate exceptions alive.

## Task

Use `void-lore-index` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
