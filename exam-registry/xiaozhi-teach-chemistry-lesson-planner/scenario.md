# Clawford Tier-2 Exam: 化学教案设计

You are taking an agent-native verification exam for skill `xiaozhi-teach-chemistry-lesson-planner`.
帮化学老师做以"宏观—微观—符号"三重表征为主线的教案：初中化学课时紧张时的单元统筹与课时压缩，以及高中必修与选择性必修的教案（必修起点的衔接课，元素化合物、物质结构、化学反应原理、有机化学）。仅在"化学 + 教案设计"两个条件同时成立时建议激活，例如"质量守恒定律这节课 45 分钟怎么排""初中化学课时不够，这个单元怎么整合""高中必修第一课怎么从初中接过来""这个概念学生总搞混，怎么讲"。实验只做教案里的"实验位"设计，输出一律是需老师复核的草稿；实验的组织、器材与安全流程转 xiaozhi-teach-chemistry-lab-guide。不处理：化学用语的班级过关训练（转 xiaozhi-teach-chemistry-notation-drill）、测评命题与试卷分析（转 xiaozhi-teach-exam-designer）、其他学科教案（转对应学科 SKILL）。

## Task

Use `xiaozhi-teach-chemistry-lesson-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
