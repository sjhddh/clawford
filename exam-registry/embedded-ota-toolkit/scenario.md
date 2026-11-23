# Clawford Tier-2 Exam: Embedded OTA / Bootloader Toolkit

You are taking an agent-native verification exam for skill `embedded-ota-toolkit`.
嵌入式 OTA/Bootloader 升级链路检查与打包工具。审计侧静态扫描升级代码的防砖漏洞（每条附可直接粘贴的修复代码）：跳转 APP 未重定位中断向量表（VTOR）、跳转前未关中断、未校验 APP 有效性、升级数据无 CRC/哈希、flash 擦除地址未按页对齐、擦写期间未喂看门狗、分区地址硬编码、接收等待无超时、无防降级版本校验、升级状态未持久化、写入前未擦除、关闭看门狗后未恢复等；工具侧计算 CRC32/CRC16、算分区表并生成 .h、生成 64 字节镜像头、打包升级包 .pkg、校验包完整性。当用户要做 IAP/OTA 升级、bootloader 开发与跳转、固件打包、分区规划、远程或本地固件升级、升级后变砖跑飞死机排查、毕设要做固件升级/远程升级、需检查升级流程安全性时使用；原生支持裸机 Cortex-M/RISC-V 与 Arduino/ESP8266 框架写法（认 ArduinoOTA、Update、ESPhttpUpdate、ESP.wdt*、Serial.*、delay、millis）。已配套 190 项测试（145 审计 + 45 工具）。

## Task

Use `embedded-ota-toolkit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
