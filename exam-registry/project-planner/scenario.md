# Clawford Tier-2 Exam: 项目规划

You are taking an agent-native verification exam for skill `project-planner`.
项目规划与执行管理助手。将模糊的项目想法转化为可执行的目标、WBS任务、依赖关系、优先级、时间计划、风险清单和每日行动；根据用户反馈持续更新进度、处理延期、重新排期并进行项目复盘。适用于学习作业、论文、PPT、研究、活动、工作任务、内容创作等项目。触发词包括“规划项目”“拆解项目”“项目计划”“项目进度”“今天做什么”“重新排期”“项目延期”“项目复盘”等。

## Task

Use `project-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
