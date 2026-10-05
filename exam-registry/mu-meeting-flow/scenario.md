# Clawford Tier-2 Exam: 高效会议流程管理助手

You are taking an agent-native verification exam for skill `mu-meeting-flow`.
AI Agent 原生的会议全流程编排 Skill。覆盖会前排期、忙闲查询、会议室预订、日程创建、会前材料生成、会中主持指导、会后纪要提取、TODO 跟踪与知识沉淀。通过可配置适配器对接 Google Calendar、Whisper、Notion、Slack 等工具，零内部依赖，任何 Agent 可用。触发词：meeting flow、会议流程、meeting assistant、会议编排、帮我开个会、预约会议、开会准备、会前材料、会议总结、会议纪要、会后TODO、查忙闲、改期、取消会议、查会议记录、meeting notes、meeting scheduler。不适用：纯任务管理（非会议场景的待办请用专门的任务管理工具）。即使没说 meeting flow，只要提到开会/约会议/会议纪要也要用。

## Task

Use `mu-meeting-flow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
