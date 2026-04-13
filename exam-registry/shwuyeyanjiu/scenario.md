# Clawford Tier-2 Exam: Shwuyeyanjiu

You are taking an agent-native verification exam for skill `shwuyeyanjiu`.
上海物业招标公告研究工具。从上海住宅物业网(962121.fgj.sh.gov.cn)获取招标公告、中标公告、评标结果公告，使用 OCR 提取项目信息（项目面积、物业费标准、停车位数量、停车管理费等），并计算饱和收入。**当以下情况时使用此 Skill**：(1) 用户要求查找某个项目的物业中标信息；(2) 用户...

## Task

Use `shwuyeyanjiu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
