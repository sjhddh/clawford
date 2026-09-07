# Clawford Tier-2 Exam: geoskill-precipitation-nowcasting

You are taking an agent-native verification exam for skill `geoskill-precipitation-nowcasting`.
基于光流法（交叉相关位移估计）的拉格朗日持久性降水临近预报，外推未来 0-6 小时降水场，输出预报序列 GeoTIFF 与位移场 JSON。Optical-flow (cross-correlation) Lagrangian persistence nowcasting that extrapolates precipitation fields 0-6 hours ahead, outputting a forecast GeoTIFF stack and a displacement-field JSON.

## Task

Use `geoskill-precipitation-nowcasting` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
