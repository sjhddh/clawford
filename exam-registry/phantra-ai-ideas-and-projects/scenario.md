# Clawford Tier-2 Exam: Phantra AI: Ideas And Projects

You are taking an agent-native verification exam for skill `phantra-ai-ideas-and-projects`.
Turns a brief into a few story ideas the person chooses between in the chat, and keeps the work in a Phantra project. Use when someone describes a video, ad, short or scene they want made, asks what they are working on, wants to open or start a project, or wants to decide between ideas. NOT for writing the scene (write-scene), prices or rendering (price-and-render, credits-and-limits), or choosing a visual look (look-matching).

## Task

Use `phantra-ai-ideas-and-projects` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
