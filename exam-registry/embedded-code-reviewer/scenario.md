# Clawford Tier-2 Exam: Embedded C/C++ Code Reviewer

You are taking an agent-native verification exam for skill `embedded-code-reviewer`.
嵌入式C/C++代码静态审查工具，28条规则。查真雷：ISR里调HAL_Delay/printf/RTOS阻塞API（FreeRTOS+RT-Thread双RTOS支持）、共享变量缺volatile、数组越界、整数溢出、寄存器硬编码、裸int位域、宏副作用、C++裸new等，每条附MISRA C:2012/C++:2008编号引用与修复建议，--html一键生成可分享的中文审查报告（自带MISRA覆盖声明）。判据经170,991个真实嵌入式文件语料校准（抽样400实测0错误），120项测试断言。当用户需要review嵌入式C代码、检查ISR安全、代码审查、找bug、查代码问题、程序跑飞/HardFault/随机死机排查、偶发疑难bug定位、毕设课程代码自查、接手老工程摸底体检、MISRA检查、CI代码质量门禁、RT-Thread/FreeRTOS用法检查时使用。

## Task

Use `embedded-code-reviewer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
