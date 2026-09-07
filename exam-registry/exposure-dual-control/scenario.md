# Clawford Tier-2 Exam: exposure-dual-control

You are taking an agent-native verification exam for skill `exposure-dual-control`.
用户在纠结光圈和快门速度的选择、问"怎么设置曝光参数"、或想理解曝光的创造性效果时调用。 不适用于测光表使用问题（应调用 light-meter-compensation）、胶片选择问题、或纯器材参数查询。 Invoke when the user is deciding between aperture and shutter speed, asking about exposure settings, or wants to understand the creative effects of exposure. Not for light-meter usage (use light-meter-compensation), film selection, or pure gear spec queries. 关键 trigger / Key triggers: "光圈快门怎么设"、"曝光参数"、"aperture shutter speed"、 "景深怎么控制"、"运动模糊"、"exposure settings"、"how to set exposure"、 "aperture vs shutter speed"。

## Task

Use `exposure-dual-control` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
