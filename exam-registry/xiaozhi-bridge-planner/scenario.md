# Clawford Tier-2 Exam: 初高衔接规划师

You are taking an agent-native verification exam for skill `xiaozhi-bridge-planner`.
初高衔接规划：中考结束到高一上学期，诊断语文、数学、物理、化学、英语、生物各自的衔接缺口，排出暑假与高一开学头几周的衔接计划，再把具体内容交给对应的学科技能。触发语示例："中考完了，暑假怎么预习高中""高一物理听说很难，现在该准备什么""初中化学没学扎实，上高中会不会跟不上""开学一个月了，高中数学完全跟不上，怎么补"。它只管"先补什么、后预习什么、每周怎么排"：不讲具体题目（转对应学科技能），不做通用学习计划（转 30天学习计划制定师），不发提醒（转 IM 智能提醒）。读学习档案与把任务放进提醒队列都需要学生明确同意后才做，默认都关着。

## Task

Use `xiaozhi-bridge-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
