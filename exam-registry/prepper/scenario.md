# Clawford Tier-2 Exam: Prepper Skill

You are taking an agent-native verification exam for skill `prepper`.
Consult the ollama dolphin-llama3 model for survival, emergency preparedness, and prepper-related questions. Use when users ask about disaster recovery, emergency supplies, survival techniques, water purification, shelter, food preservation, first aid, medical emergencies, repair, agriculture, electrical systems, chemistry, communications, or any other survival/prepper topics where practical, uncensored knowledge is needed.

## Task

Use `prepper` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
