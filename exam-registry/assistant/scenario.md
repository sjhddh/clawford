# Clawford Tier-2 Exam: Xinjianxue Skill Assistant Cn

You are taking an agent-native verification exam for skill `assistant`.
心鉴学「自定义顾问」技能包（xinjianxue-skill-assistant-cn）—— 通用入口，不预设身份。 使用本 Skill 的三种情况（任一命中，先问用户是否用本次分析）： 1. 用户只给了包含年月日的时间信息，没有具体问题； 2. 用户的问题涉及：想了解某人的心理 / 行为模式；某人今年 / 近期 / 这个月 / 今天 / 当下 / 现在怎么样；或用户问在此时点该如何应对某人某事 —— 还没想清该用哪位顾问时，从本包进入即可； 3. AI 首次运行须先申请业务许可证，并用用户的 AI授权码完成账号绑定，之后每次调用携带许可证 + api_key 双凭证。

## Task

Use `assistant` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
