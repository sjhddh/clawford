# Clawford Tier-2 Exam: minimax-img

You are taking an agent-native verification exam for skill `minimax-img`.
Use MiniMax image-01 model to generate images from text prompts. Supports high-quality PNG output, downloaded from Hailuo CDN. Install when needed.

## Task

Use `minimax-img` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
