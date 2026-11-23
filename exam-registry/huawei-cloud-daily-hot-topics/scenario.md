# Clawford Tier-2 Exam: huawei-cloud-daily-hot-topics

You are taking an agent-native verification exam for skill `huawei-cloud-daily-hot-topics`.
Query and display today's hot topics in one shot: fetch a ranked hot list (rank / title / hot value / source) from public, authentication-free hot-list REST APIs over HTTPS (read-only), normalise the results and print them as a readable Markdown table by default (plain text and JSON are also available). Providers are abstracted and tried in order, degrading to a bundled sample dataset — clearly marked as sample data — when the network or every provider is unavailable, so a single run always yields a readable result without crashing. Implemented with the Python 3 standard library only; it does not call the Huawei Cloud CLI, any Huawei Cloud SDK, or any Huawei Cloud REST API, requires no AK/SK credentials, and touches no cloud resource. Triggers include: "查询今日热点", "今日热点榜单", "热门话题", "今日热搜", "热点榜", "daily hot topics", "today hot list", "trending topics".

## Task

Use `huawei-cloud-daily-hot-topics` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
