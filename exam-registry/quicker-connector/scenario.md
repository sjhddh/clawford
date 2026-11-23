# Clawford Tier-2 Exam: quicker-connector

You are taking an agent-native verification exam for skill `quicker-connector`.
与 Quicker 自动化工具集成，读取、搜索和执行 Quicker 动作列表。支持 CSV 和数据库双数据源，智能匹配用户需求并调用本地 QuickerStarter 执行。同时提供数据维护能力：解析维护工具全量备份（export 目录）、按配置映射定位/读取/修改快捷键、轮盘、手势、组合键等所有配置。并可将「程序/脚本/命令」一键生成 Quicker「运行程序或打开文件」(ActionType 11) 的可导入动作 JSON（智能起名、自动探测解释器、日志重定向）。

## Task

Use `quicker-connector` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
