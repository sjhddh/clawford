# Clawford Tier-2 Exam: GK Fault Precheck

You are taking an agent-native verification exam for skill `gk-diagnose`.
输入设备品牌与故障现象（如 G120 + F30001、S7-1200 BF 灯红），免费判断故障落在哪一段（电源/控制器/通讯/执行器/机械/数据解释），给出 3-5 项立刻能做的现场检查动作与安全红线。永久免费，不需付费、不需授权。覆盖西门子 G120/S7-1200/1500、三菱 FX5U、HMI、Modbus RTU 等常见工控场景。

## Task

Use `gk-diagnose` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
