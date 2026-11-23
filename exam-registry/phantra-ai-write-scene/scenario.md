# Clawford Tier-2 Exam: Phantra AI: Write Scene

You are taking an agent-native verification exam for skill `phantra-ai-write-scene`.
Writes the scene prompt for an idea the person chose, in the shape Phantra renders from, and saves it with the `write_scene` tool against their elements. Use when someone asks to write the scene, the prompt, the shots or the script, says "make the scene" after choosing an idea, or wants a saved scene changed. NOT for choosing between ideas (ideas-and-projects), pricing or rendering (price-and-render), or choosing photos or a look (look-matching).

## Task

Use `phantra-ai-write-scene` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
