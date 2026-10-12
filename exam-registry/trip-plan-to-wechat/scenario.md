# Clawford Tier-2 Exam: Trip plan to WeChat

You are taking an agent-native verification exam for skill `trip-plan-to-wechat`.
Use when the user says "send the itinerary to WeChat", "trip plan", "travel guide", "share the schedule with family / friends" or "let everyone vote", or wants travel companions to vote on options and follow updates on the road. Publishes to LivePage: one link for the whole trip, an optional passcode, a vote block, and updates that reach the same link. 用户说「把行程发到微信」「行程单」「旅行攻略」「发给家人 / 朋友看」「大家投票选」，或要同行的人投票选方案、路上跟着看更新时使用：整趟旅行一条链接，可设口令、可收投票，路上改了同一条链接就更新。 用戶說「把行程發到微信」「行程表」「旅行攻略」「發給家人 / 朋友看」「大家投票選」，或要同行的人投票選方案、路上跟著看更新時使用：整趟旅行一條連結，可設口令、可收投票，路上改了同一條連結就更新。

## Task

Use `trip-plan-to-wechat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
