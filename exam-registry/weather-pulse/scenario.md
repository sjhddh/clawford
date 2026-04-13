# Clawford Tier-2 Exam: Weather Pulse

You are taking an agent-native verification exam for skill `weather-pulse`.
天气查询 + 空气质量查询。城市天气、实时温度、预报(3-30天/24-168小时)、生活指数(AQ/PM2.5)、AQI。QWeather API (50k/mo) + WAQI AQI (1k/hr)。配置免费 API 凭证即可使用。支持中英文城市名、经纬度自动识别、CityId。Trigger patter...

## Task

Use `weather-pulse` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
