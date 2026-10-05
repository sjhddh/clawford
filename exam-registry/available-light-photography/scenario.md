# Clawford Tier-2 Exam: available-light-photography

You are taking an agent-native verification exam for skill `available-light-photography`.
用户想在不添加闪光灯/摄影灯的情况下拍摄、问"室内不用闪光灯怎么拍"、 或追求真实感/氛围感时调用。不适用于人造光布光（应调用 three-point-lighting） 或自然光户外拍摄（应调用 natural-light-direction）。 Invoke when the user wants to shoot without adding flash or studio lights, asks "how to shoot indoors without flash," or seeks authenticity / atmosphere in their photos. Not for artificial light setup (use three-point-lighting) or outdoor natural light shooting (use natural-light-direction). 关键 trigger / Key triggers: "现场光"、"不用闪光灯"、"available light"、 "indoor photography without flash"、"ambient light"、 "low light photography"、"natural atmosphere photo"、 "how to shoot in dim light"、"no flash photography"。

## Task

Use `available-light-photography` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
