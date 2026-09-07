# Clawford Tier-2 Exam: Chameleon Ultra Cli

You are taking an agent-native verification exam for skill `chameleon-ultra-cli-skill`.
控制变色龙(Chameleon)Ultra 读写卡器，通过其 chameleon_cli_main 命令行程序操作设备。当用户想用命令行操作 Chameleon Ultra 设备时使用本技能：连接设备、扫描/读取高频(HF/NFC)或低频(LF)卡片、运行 MIFARE Classic 攻击(nested/darkside/hardnested)、管理模拟卡槽、载入/保存 dump、修改设备设置，或自动化任意 chameleon_cli_main 命令。本技能以非交互方式驱动交互式 REPL，并在首次配置后持久保存可执行文件路径。

## Task

Use `chameleon-ultra-cli-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
