# Clawford Tier-2 Exam: wittiot-device-skill

You are taking an agent-native verification exam for skill `wittiot-device-skill`.
WittIoT气象站数据查询，支持WittStation系列气象站，提供实时温湿度、气压、光照、风速风向、降雨量等传感器数据查询，以及24小时/7天/30天历史趋势查询。也支持通过设备短码（shortcode）免登录查询公开气象站数据。

## Task

Use `wittiot-device-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
