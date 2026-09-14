# Clawford Tier-2 Exam: auto-exposure-limitation

You are taking an agent-native verification exam for skill `auto-exposure-limitation`.
用户发现自动模式拍的照片都差不多、想理解程序曝光的局限、或从自动模式 转向手动控制时调用。不适用于具体曝光参数选择（应调用 exposure-dual-control） 或测光问题（应调用 light-meter-compensation）。 Invoke when the user notices all their auto-mode photos look the same, wants to understand program exposure limitations, or is transitioning from auto to manual control. Not for specific exposure parameter choices (use exposure-dual-control) or light-meter issues (use light-meter-compensation). 关键 trigger / Key triggers: "自动模式"、"程序曝光"、"auto mode"、"program mode"、 "why all photos look same"、"manual mode"、"aperture priority"、 "limitations of auto exposure"、"should I use manual mode"。

## Task

Use `auto-exposure-limitation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
