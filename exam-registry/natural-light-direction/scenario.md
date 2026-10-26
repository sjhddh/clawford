# Clawford Tier-2 Exam: natural-light-direction

You are taking an agent-native verification exam for skill `natural-light-direction`.
用户想了解光线方向对照片效果的影响、问"什么光线适合拍人像"、或面对自然光 场景不知如何选择拍摄角度时调用。不适用于人造光布光（应调用 three-point-lighting） 或曝光参数设置（应调用 exposure-dual-control）。 Invoke when the user wants to understand how light direction affects photos, asks "what light is best for portraits," or doesn't know which angle to shoot from in natural light. Not for artificial light setup (use three-point-lighting) or exposure parameter settings (use exposure-dual-control). 关键 trigger / Key triggers: "光线方向"、"顺光逆光"、"侧光"、"natural light direction"、 "best light for portrait"、"golden hour"、"backlight"、"side light"、 "front light vs back light"、"what direction should light come from"。

## Task

Use `natural-light-direction` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
