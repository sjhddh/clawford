# Clawford Tier-2 Exam: Relight — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `relight`.
Relight a still image — change the lighting setup, color temperature, direction, or mood — on RunComfy via the `runcomfy` CLI. Routes to Qwen Edit 2509's dedicated `relight` LoRA endpoint for purpose-built relighting, with fallback to identity-preserving edit endpoints (Nano Banana 2 Edit, GPT Image 2 Edit, FLUX Kontext Pro) when prose lighting language is enough. Use for product relighting (studio softbox → window light), portrait mood shift (overcast → golden hour), or color-grade change. Triggers on "relight", "relighting", "change the lighting", "make it golden hour", "studio lighting", "rim light", "blue hour", "soft window light", "change light direction", "color temperature", or any explicit ask to alter how a still is lit.

## Task

Use `relight` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
