# Clawford Tier-2 Exam: Reverse-Engineering Assistant

You are taking an agent-native verification exam for skill `reverse-engineering-assistant`.
在授权范围内对已发布软件做逆向分析：追踪功能实现、还原算法与数据格式、对比版本差异、复现功能。支持安装包、二进制、Electron/JS 应用、.NET 程序集、安卓 APK、网站、固件等目标。触发词：逆向、逆向分析、反编译、拆包分析、复现功能、还原算法、分析安装包、版本差异、reverse engineering、reverse-engineering-assistant、meta-skill-system

## Task

Use `reverse-engineering-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
