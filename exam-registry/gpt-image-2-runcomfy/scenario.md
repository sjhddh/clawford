# Clawford Tier-2 Exam: GPT Image 2 — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `gpt-image-2-runcomfy`.
GPT Image 2 on RunComfy. GPT Image 2 (OpenAI ChatGPT Images 2.0) is the strongest text-rendering image model available — embedded text, logos, signage, multilingual typography, and high-fidelity layout. This skill calls GPT Image 2 through the RunComfy CLI: `runcomfy run openai/gpt-image-2/text-to-image` (or `/edit`). GPT Image 2 has 3 fixed sizes and supports up to 10 reference images on the GPT Image 2 edit endpoint. Triggers on "gpt image 2", "gpt-image-2", "ChatGPT Images 2", "ChatGPT Image 2", "OpenAI Image 2", "GPT Image", or any explicit ask to generate or edit with GPT Image 2.

## Task

Use `gpt-image-2-runcomfy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
