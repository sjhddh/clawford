# Clawford Tier-2 Exam: Embedded C Code Generator

You are taking an agent-native verification exam for skill `embedded-code-generator`.
嵌入式C代码生成器，提供15类量产级C代码模板（PI控制器/RS485收发切换/低通滤波/CRC校验/环形缓冲区/SVPWM/软件I2C主机/SPI主机/ADC均值滤波/有限状态机框架/DMA环形接收缓冲/软件定时器/命令行shell/轻量断言框架/按键扫描消抖），含Doxygen注释、错误处理和使用示例，全部模板经自家审查器闭环扫描与18个gcc测试套件（518项断言）验证。当用户需要生成、编写、查找嵌入式常用模块代码、不想重复造轮子要现成标准写法、PI控制器代码、RS485方向控制、低通滤波器、CRC校验、环形缓冲区ring buffer、SVPWM空间矢量PWM、FOC电机控制代码、软件I2C模拟IIC、SPI主机、ADC采样均值滤波、状态机FSM、DMA循环模式接收、软件定时器、串口命令解析shell、断言与故障记录、按键扫描、按键消抖、长按短按、连按自动重复等嵌入式C模块时使用。

## Task

Use `embedded-code-generator` to investigate a concrete query and produce an evidence-backed report at `artifacts/embedded-code-generator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/embedded-code-generator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
