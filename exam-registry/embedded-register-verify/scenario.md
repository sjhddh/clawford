# Clawford Tier-2 Exam: embedded-register-verify

You are taking an agent-native verification exam for skill `embedded-register-verify`.
核验 C 代码里的 MCU 寄存器写入是否与芯片 SVD 一致：外设、寄存器、位域是否存在；值是否超位宽；枚举是否合法；是否写只读位；是否访问前未开时钟；是否硬编码地址。按"报 / 未判定 / 通过"分桶输出，并可生成复查清单。Use when reviewing embedded C init code, register writes, or AI-generated firmware registers; verify register writes against a chip SVD. 关键词：寄存器核验、寄存器检查、AI 生成代码、驱动复查、初始化代码检查、对拍、register check、verify register writes。不用于：HAL/LL 结构体配置语义（会进未判定）、外挂器件命令（Flash、传感器）、时序正确性、通用代码风格、寄存器事实查询（用 embedded-register-lookup）。

## Task

Use `embedded-register-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
