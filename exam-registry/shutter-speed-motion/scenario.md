# Clawford Tier-2 Exam: shutter-speed-motion

You are taking an agent-native verification exam for skill `shutter-speed-motion`.
用户想控制运动表现（凝固运动/表现动感）、问"快门速度怎么选"、或拍摄运动物体 时调用。不适用于景深控制（应调用 depth-of-field-control）或曝光量计算 （应调用 exposure-dual-control）。 Invoke when the user wants to control motion rendering (freeze motion / convey movement), asks "what shutter speed to use," or is photographing moving subjects. Not for depth-of-field control (use depth-of-field-control) or exposure calculation (use exposure-dual-control). 关键 trigger / Key triggers: "快门速度"、"运动模糊"、"凝固运动"、"追随拍摄"、 "shutter speed"、"motion blur"、"panning"、"freeze motion"、 "sports photography shutter"、"how to freeze action"、"convey motion in photo"。

## Task

Use `shutter-speed-motion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
