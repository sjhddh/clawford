# Clawford Tier-2 Exam: AI Watermark Margin

You are taking an agent-native verification exam for skill `ai-watermark-margin`.
Drop the in-image watermark/signature that an AI image editor stamps on YOUR OWN ai-generated or ai-edited pictures, deterministically — by adding a blank margin before the edit and cropping it off after. No inpainting, no ML model, no third-party copyright watermark removal. Use when: 'AI edit leaves a watermark', 'remove AI signature', 'AI 修图水印', '去AI生成签名', '图片下方有水印', 'generator watermark'. Two tiny Pillow scripts: add_margin.py pads the canvas with whitespace (or black) so the generator's mark lands outside the content; crop_margin.py detects that uniform border and crops it away. Includes an ethics/compliance note: this only removes the generator's own visual stamp; you still disclose AI use per platform rules.

## Task

Use `ai-watermark-margin` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
