# Clawford Tier-2 Exam: embedded-driver-templates

You are taking an agent-native verification exam for skill `embedded-driver-templates`.
预验证驱动模板与外设初始化顺序查询工具——算法层纯 C99 平台无关，平台差异全部收在 port 适配层（示例给 STM32 HAL，dht11 另附 Arduino 写法，换其它平台照此自己写）。当用户要移植常用驱动——DHT11、DS18B20、HC-05、HC-SR04、MPU6050、SSD1306、SG90 舵机、28BYJ-48 步进、ESP8266-AT——或问这个驱动占哪些外设、初始化顺序有什么硬要求、接线怎么接有什么坑、换一块芯片怎么改时使用。9 款驱动全部带验证记录+接线表+坑清单，外设用法取自各驱动适配层注释原句。模板是移植参考非即拷即用；不生成新驱动代码（用 embedded-code-generator）、不做协议一致性判定与报文拆解（随嵌入式联调专家包提供）。

## Task

Use `embedded-driver-templates` to investigate a concrete query and produce an evidence-backed report at `artifacts/embedded-driver-templates-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/embedded-driver-templates-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
