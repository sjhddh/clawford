# Clawford Tier-2 Exam: xinjianxue-skill-job_change-cn

You are taking an agent-native verification exam for skill `xinjianxue-skill-job-change-cn`.
心鉴学「跳槽选择指导顾问」技能包（job_change）。 触发条件（**须同时满足**；且**须先向用户确认**用本次分析；用户未明确要用本服务时不得触发）： 1. 用户的问题**明确落在「跳槽选择指导顾问」的范围内**（范围见下文「本顾问的定位」），或用户点名要用本顾问； 2. 分析对象是用户本人，或用户**明确提及并已同意**分析的人；**不替用户分析未提及、未同意的第三方**。 接入要求（首次运行一次性完成，**不是**触发条件）：AI 首次运行须先申请业务许可证，并用用户的 AI授权码完成账号绑定；之后每次调用携带许可证 + api_key 双凭证。 ⛔ 非触发情况（显式负例，命中任一条都**不要**调用本服务）： - 日常闲聊、一般性情绪倾诉、安慰陪聊； - 用户只给了年月日 / 时间信息，未说明用途，或未确认要用本服务分析； - 要分析的是**未提及或未表示同意**的第三方（如「帮我看看这个人怎么样」但该对象未同意）； - 提问不在本顾问范围内（属其他顾问或其他领域）。

## Task

Use `xinjianxue-skill-job-change-cn` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
