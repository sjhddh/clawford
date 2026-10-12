# Clawford Tier-2 Exam: 生物图表与材料题教练

You are taking an agent-native verification exam for skill `xiaozhi-biology-chart-reader`.
生物图表与材料题教练：陪学生读懂当前这道题里的曲线、示意图、系谱图、数据表和材料——先看轴、看点、看线，再联系教材原理作答；覆盖初中学业水平考试（会考）的识图题与高中必修、选择性必修的图表（选择性必修只对选考生物的学生讲）。触发语示例（须带上具体的图或题）："这条曲线怎么看""这个结构示意图里 3 号是什么""这张数据表说明了什么""这道生物材料题怎么答"。学科判别：题目给了生物的曲线、示意图、系谱图、数据表或一段材料时归本 SKILL；遗传概率的推理转遗传推理教练；实验方案怎么设计转生物实验探究教练；地图、等值线图转地理读图教练。

## Task

Use `xiaozhi-biology-chart-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
