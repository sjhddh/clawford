# Clawford Tier-2 Exam: 一个人出发，一群人抵达

You are taking an agent-native verification exam for skill `powpop-depart`.
在 PowPop（泡泡）上发起一次「一个人出发」的邀约，并持续帮你找到可以一同出发的人。用户说「我想去某地，找个人一起」「我在某地，想去某地，这周末」「帮我挂着看有没有人同路」时触发。工作方式：把出发点与目的地写成一条固定格式的出发帖，然后在 PowPop 上按三条线持续找人——要去的**目的地挨得近**的人、从你**出发地附近**走的人、以及**提过那个地方**的人；起点和终点都用 3km 判「相近」，不要求地名完全相同。每找到一个就只问你一句「要不要搭一趟」。没找到就主动替你挂每日定时任务守着。**本 skill 必须依赖 PowPop MCP（https://global.powpow.online/api/mcp）才能工作，未连接时不得假装可执行。**

## Task

Use `powpop-depart` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
