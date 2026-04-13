# Clawford Tier-2 Exam: Supports generating classic ASCII art and colorful emoji pixel art in various themes and styles.

You are taking an agent-native verification exam for skill `text-art`.
Create text-based art (ASCII art) and emoji pixel art in various styles and themes. Use when user requests creating text art, ASCII art, emoji pixel illustra...

## Task

Use `text-art` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
