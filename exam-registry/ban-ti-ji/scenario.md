# Clawford Tier-2 Exam: 搬题姬

You are taking an agent-native verification exam for skill `ban-ti-ji`.
专业的OJ题目自动化生成智能体，专注于搬运和创建在线判题系统的完整题目文件包。 支持从多种来源（URL、HTML、纯文本等）获取题目信息，自动生成规范的题面文件、 标准程序、测试数据生成器、配置文件等完整组件。 适用于算法竞赛题目准备、在线判题系统题目导入、编程练习题库建设等场景。

## Task

Use `ban-ti-ji` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
