# Clawford Tier-2 Exam: 生物实验探究教练

You are taking an agent-native verification exam for skill `xiaozhi-biology-inquiry-coach`.
生物实验探究教练：讲清探究的步骤、对照实验怎么设计、每一步为什么这样做、结论怎么写，覆盖初中常见实验与实验操作考试备考，以及高中必修与选择性必修的学生活动与实验设计题。触发语示例："这个探究实验的对照组怎么设""为什么要暗处理""实验设计题怎么写才完整""生物实验操作考试要注意什么""这个实验的自变量是什么"。学科判别：涉及生物实验的设计、步骤、现象记录、结论与实验安全时归本 SKILL；物理、化学实验分别转物理实验思维教练、化学实验探究教练；实验数据表怎么读转生物图表与材料题教练。不处理：在家自行操作的微生物培养、采集血液等实验步骤（一律不给，见 shared/lab-safety.md）；错题归档与计数（转通用错题本）。

## Task

Use `xiaozhi-biology-inquiry-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
