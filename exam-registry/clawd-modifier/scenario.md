# Clawford Tier-2 Exam: Clawd Modifier

You are taking an agent-native verification exam for skill `clawd-modifier`.
Modify Clawd, the Claude Code mascot. Use this skill when users want to customize Clawd's appearance in their Claude Code CLI, including changing colors (blue Clawd, green Clawd, holiday themes), adding features (arms, hats, accessories), or creating custom ASCII art variants. Triggers include "change Clawd color", "give Clawd arms", "customize the mascot", "modify Clawd", "make Clawd [color]", or any request to personalize the Claude Code terminal mascot.

## Task

Use `clawd-modifier` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
