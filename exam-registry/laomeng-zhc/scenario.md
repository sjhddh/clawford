# Clawford Tier-2 Exam: laomeng-zhc

You are taking an agent-native verification exam for skill `laomeng-zhc`.
老孟中文编程（ZHC）语言内核与智能体协作技能。当需要编写、编译、运行、诊断 ZHC 源码（.zc 文件），或需要把表格数据导出为 CSV/XLSX/DOCX/HTML，或需要查询中文关键字、内置函数、中文错误码与契约版本时使用本技能。适用于纯中文编程教学、中文代码生成、中文报错诊断与 Office 文档产出场景。

## Task

Use `laomeng-zhc` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
