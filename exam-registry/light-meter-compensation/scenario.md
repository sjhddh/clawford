# Clawford Tier-2 Exam: light-meter-compensation

You are taking an agent-native verification exam for skill `light-meter-compensation`.
用户遇到曝光不准（雪景拍成灰色、逆光人像面部全黑）、问"测光表怎么用"、 或面对高反差场景不知如何曝光时调用。不适用于光圈快门创意选择 （应调用 exposure-dual-control）或胶片宽容度理论查询。 Invoke when the user faces incorrect exposure (gray snow, black faces in backlight), asks "how to use a light meter," or doesn't know how to expose high-contrast scenes. Not for aperture/shutter creative choices (use exposure-dual-control) or film latitude theory queries. 关键 trigger / Key triggers: "雪景发灰"、"逆光曝光"、"测光表不准"、"18%灰"、 "light meter"、"exposure compensation"、"backlit portrait"、 "high contrast scene exposure"、"why is my snow gray"、"18% gray card"。

## Task

Use `light-meter-compensation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
