# Clawford Tier-2 Exam: film-exposure-asymmetry

You are taking an agent-native verification exam for skill `film-exposure-asymmetry`.
用户在使用胶片拍摄、问"负片和反转片曝光有什么区别"、或面对高反差场景 需要决定曝光策略时调用。纯数码摄影用户不适用（数码传感器宽容度特性不同）。 Invoke when the user is shooting film, asks about the difference between negative and reversal film exposure, or needs to decide exposure strategy for high-contrast film scenes. Not applicable to pure digital photography (sensor latitude differs). 关键 trigger / Key triggers: "负片曝光"、"反转片曝光"、"slide film exposure"、 "negative film latitude"、"宁过勿欠"、"宁欠勿过"、 "high contrast film exposure"、"film exposure strategy"、 "overexpose or underexpose film"。

## Task

Use `film-exposure-asymmetry` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
