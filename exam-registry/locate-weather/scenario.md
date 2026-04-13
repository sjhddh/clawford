# Clawford Tier-2 Exam: Locate Weather

You are taking an agent-native verification exam for skill `locate-weather`.
定点天气预报 Skill。先通过 GPS、IP、WiFi、系统定位等多方法三角定位获取精确坐标， 再获取该位置的天气预报。支持手动指定坐标/城市、时间感知定位策略（根据时段自动选择最优定位方法）。 定位模块引用 multi-source-locate Skill，天气模块独立实现。 用于："我这里的天气"、"定点...

## Task

Use `locate-weather` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
