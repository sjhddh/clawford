# Clawford Tier-2 Exam: 求职全链路（规划·岗位·简历·面试·投递·HR）

You are taking an agent-native verification exam for skill `career-planning`.
求职全链路。当用户涉及职业规划（就业形势研判/求职迷茫/转行/路径/能力补齐/复盘，及职业定位/就业选择/跳槽分析/创业建议四类职业决策）、岗位分析（JD 拆解/岗位值不值得投/匹配度）、简历优化（梳理/亮点/针对 JD 改写）、面试准备（押题/模拟/回答结构）、投递优化（节奏/排序/版本管理/复盘）、HR 面与谈薪（筛选逻辑/表达/薪酬沟通/offer 比较）任一求职意图时使用。主文件负责模块路由：判定用户意图 → 加载对应 references/module-*.md 执行规范。内置默认画像（普通本科 / 0–3 年经验 / 薪资高增长快 / AI 应用、新能源储能电控、工业机器人、半导体、网络安全五大赛道），用户输入可逐项覆盖；调研支持联网与降级知识库；人岗匹配与选岗推荐衔接 jd-resume-matcher / resume-job-match。

## Task

Use `career-planning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
