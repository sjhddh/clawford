# Clawford Tier-2 Exam: three-point-lighting

You are taking an agent-native verification exam for skill `three-point-lighting`.
用户想学习室内/棚拍布光方法、问"怎么布光"、或设置人造光拍摄时调用。 不适用于自然光拍摄（应调用 natural-light-direction）或现场光摄影 （应调用 available-light-photography）。 Invoke when the user wants to learn indoor / studio lighting setup, asks "how to set up lights," or is configuring artificial light for a shoot. Not for natural light shooting (use natural-light-direction) or available light photography (use available-light-photography). 关键 trigger / Key triggers: "布光"、"三点布光"、"主灯辅助灯"、"studio lighting"、 "three point lighting"、"key light fill light"、"light ratio"、 "portrait lighting setup"、"how to light a portrait"、"studio light setup"。

## Task

Use `three-point-lighting` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
