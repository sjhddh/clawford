# Clawford Tier-2 Exam: Museum Explorer

You are taking an agent-native verification exam for skill `museum-explorer`.
博物馆/美术馆看展全链路助手：行前生成策展卡、行中引导观展与展品讲解、行后沉淀电子手帐并产出展品打卡印章，支持同步馆方展览索引、查询近期展览、积累本地展品库。当用户提到看展、观展、策展，或想了解博物馆/美术馆正在展什么、做行前攻略、现场打卡、做手帐、集印章、约朋友分享看展时使用。信息核验标注来源与日期，禁止臆造数据。

## Task

Use `museum-explorer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
