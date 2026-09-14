# Clawford Tier-2 Exam: 数学解题教练

You are taking an agent-native verification exam for skill `xiaozhi-math-problem-solving-coach`.
初中数学单题解题过程教练：学生发来一道数学题（图片或文字）说"卡住了""这道数学题我做错了""我不知道怎么列式"时，用追问帮他找回自己的思路，提示按 shared/hint-ladder.md 逐级升。也用于"帮我出2道同类数学题""明天数学考试，帮我梳理这一章"（考前梳理只在学生明确说考试在即时进入）。默认只在当前会话工作：不读档案、不归档、不排提醒，这三项要学生当轮明确开启才做；含全库统一的数据控制入口与危机例外。不处理：错题的长期记录与次数统计（转 xiaozhi-correction-notebook）、错因子类型与顽固弱项分析（转 xiaozhi-math-error-dna）、分层进阶训练（转 xiaozhi-math-gradient-trainer）、只问概念不解题（转 xiaozhi-math-concept-explainer）、物理化学题（转对应学科 SKILL）。

## Task

Use `xiaozhi-math-problem-solving-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
