# Clawford Tier-2 Exam: huawei-cloud-study-plan-generate

You are taking an agent-native verification exam for skill `huawei-cloud-study-plan-generate`.
Randomly generate a structured, configurable study-practice plan (学习实践表). Lays the plan out as day x time-slot cells, assigns every cell a study topic and a concrete practice item, keeps topics from repeating until the topic pool is exhausted, keeps a day's time slots non-overlapping, varies each session length inside a reasonable interval, and prints the result as a Markdown table (or plain text / JSON). A --seed flag makes any run reproducible. Implemented with the Python 3 standard library only; it does not call the Huawei Cloud CLI, any Huawei Cloud SDK, or any REST API, and it touches no cloud resource. Triggers include: "生成学习实践表", "随机生成学习计划", "学习安排", "帮我排学习计划", "生成学习表", "study plan", "random study plan", "study schedule", "learning plan", "practice plan".

## Task

Use `huawei-cloud-study-plan-generate` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
