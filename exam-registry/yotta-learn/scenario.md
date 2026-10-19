# Clawford Tier-2 Exam: 元习 yotta-learn

You are taking an agent-native verification exam for skill `yotta-learn`.
元习 —— 跨智能体的知识库技能：把跨项目可复用的经验、方法、避坑与教程沉淀进分类知识库（草稿 → 审核 → 可检索），供所有智能体与项目复用；首次使用由 AI 引导初始化知识库位置并自动接入 MCP。触发：值得沉淀的时刻（命令失败 / 被用户纠正 / 发现更好做法 / 知识过时 / 请求缺失能力 / 外部接口故障）与需要查询知识的时刻（开工前 / 动手解决不显然问题前 / 用户问"以前怎么解决的"）；或用户说 知识库 / kb / 查知识 / 记一笔 / 沉淀 / 经验 / 踩坑 / self-improvement / learnings 等。边界：私密 / 敏感信息不写入知识库（走元忆私密区）；项目专属经验写项目自身文件；不自动改动系统文件。

## Task

Use `yotta-learn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
