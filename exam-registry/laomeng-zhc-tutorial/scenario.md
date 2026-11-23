# Clawford Tier-2 Exam: laomeng-zhc-tutorial

You are taking an agent-native verification exam for skill `laomeng-zhc-tutorial`.
老孟带你学编程系列教程技能。当用户想学中文编程、要从零入门、要按课次系统练习，或需要讲解 ZHC 语法（输出/变量/条件/循环/函数/文本与列表/表格统计）并配可运行示例时使用本技能。适用于零基础入门教学、按课次陪练、语法点讲解、练习题设计与批改场景。7 课示例均在当前内核实测 rc=0。

## Task

Use `laomeng-zhc-tutorial` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
