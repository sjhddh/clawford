# Clawford Tier-2 Exam: ins-style-img-bulk-gen

You are taking an agent-native verification exam for skill `ins-style-img-bulk-gen`.
Generate batches of Instagram-aesthetic photos (INS-style / Xiaohongshu / lifestyle flat-lay) by randomly composing prompts from an 80+ element library, then dispatching them in parallel to image generation skills and archiving to ~/Download/ins-image-{timestamp}/. Use when the user wants bulk INS-style images, lifestyle flat-lays, Xiaohongshu or WeChat cover art, or scene-based marketing visuals — even if they don't say 'Instagram' explicitly.

## Task

Use `ins-style-img-bulk-gen` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
