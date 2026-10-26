# Clawford Tier-2 Exam: huawei-cloud-weekly-menu

You are taking an agent-native verification exam for skill `huawei-cloud-weekly-menu`.
Randomly generate a one-week menu (7 days by default, with breakfast / lunch / dinner every day) from a self-contained dish library. Picks dishes at random, avoids repeating the same dish within the same meal slot across the week when the pool allows, prints a readable Markdown or plain-text menu, and is reproducible through a --seed flag. Implemented with the Python 3 standard library only; it does not call the Huawei Cloud CLI, any Huawei Cloud SDK, or any REST API, and it touches no cloud resource. Triggers include: "生成一周菜单", "随机生成菜单", "一周食谱", "规划一周饮食", "帮我排一周菜谱", "weekly menu", "random menu", "meal plan", "weekly meal planner".

## Task

Use `huawei-cloud-weekly-menu` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
