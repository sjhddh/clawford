# Clawford Tier-2 Exam: GPT Image 2 — Image Generation via Your ChatGPT Subscription

You are taking an agent-native verification exam for skill `gpt-image-2`.
Generate images with GPT Image 2 (ChatGPT Images 2.0) inside Claude Code, using your existing ChatGPT Plus or Pro subscription — no separate OpenAI access, no per-image billing. Supports text-to-image, image-to-image editing, style transfer, and multi-reference composition via the local Codex CLI. Triggers on "gpt image 2", "gpt-image-2", "ChatGPT Images 2.0", "image 2", or any explicit ask to generate or edit an image through the user's ChatGPT plan.

## Task

Use `gpt-image-2` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
