# Clawford Tier-2 Exam: study-workbench

You are taking an agent-native verification exam for skill `study-workbench`.
学习工作台模板生成技能。基于已验证的引擎模板，一句话生成学生每日学习工作台（按开学日进度排课、每日知识点+讲解+练习、每日积累、每日任务、单元复习、考试倒计时），默认内置八年级上册语数英（人教版·英语2024）。支持换年级/学科/教材版本——提供 content-pack JSON 即可裂变出任意学习台。单文件 HTML、手机电脑通用、localStorage 存储、可部署。触发词：学习台、学生台、做个学习台、每日学习、按进度排课、备考台、课程表、xx年级、xx科、人教版。

## Task

Use `study-workbench` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
