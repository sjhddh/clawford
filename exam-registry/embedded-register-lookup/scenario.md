# Clawford Tier-2 Exam: embedded-register-lookup

You are taking an agent-native verification exam for skill `embedded-register-lookup`.
查询 MCU 外设寄存器、位域、复位值和地址（基于 CMSIS SVD），每条结论带出处与证据标签；支持地址反查、寄存器值解码与写入值计算、位域速查与位图、中断号与 NVIC 使能提示、CMSIS 风格宏生成、跨芯片与外设级整体对比、地址区间查询、SVD 质量检查、本机芯片清单与环境体检、Markdown 表格输出、解析结果缓存。Use when the user asks about a register, bit field, reset value, peripheral base address, interrupt number, wants to decode or compute a register value to write, generate register macros, compare register definitions between devices, or find/verify SVD files on the machine. 关键词：寄存器、位域、复位值、SVD、外设地址、寄存器值、掩码、位图、中断号、IRQn、NVIC、宏定义、对比、整体对比、质量检查、SVD 位置、芯片清单、读改写、USART1->CR1、register、bitfield、mask、reset value、decode、interrupt。不用于：引脚复用、手册章节检索、勘误查询、核对代码中的寄存器写入（用 embedded-register-verify）。

## Task

Use `embedded-register-lookup` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
