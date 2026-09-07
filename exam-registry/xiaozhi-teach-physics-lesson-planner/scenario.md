# Clawford Tier-2 Exam: 物理教案设计

You are taking an agent-native verification exam for skill `xiaozhi-teach-physics-lesson-planner`.
帮初中物理老师做以物理观念为主线的教案：概念建构→规律教学→模型建构→应用训练→课堂小结，含分层与提问链。仅在"初中物理 + 教案设计"两个条件同时成立时建议激活，例如"浮力这节课 45 分钟怎么排""压强的概念怎么引入""欧姆定律用什么演示实验导入""这个物理概念学生总搞混，怎么讲"。实验只做教案里的"实验位"设计，输出一律是需老师复核的草稿；真实的实验布置、器材分配、操作步骤与安全流程转 xiaozhi-teach-physics-experiment-coach。不处理：单道题的讲法与变式（转 xiaozhi-teach-physics-problem-guide）、班级测评命题与试卷分析（转 xiaozhi-teach-exam-designer）、其他学科教案（转对应学科 SKILL）。

## Task

Use `xiaozhi-teach-physics-lesson-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
