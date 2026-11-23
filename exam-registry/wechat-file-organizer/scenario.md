# Clawford Tier-2 Exam: 微信文件自动归类

You are taking an agent-native verification exam for skill `wechat-file-organizer`.
微信文件自动归类（无头版）——扫描微信接收文件目录，按类型/月份归类、去重、生成报告；支持 JSON 规则自定义归类（按文件名/路径/扩展名）与单文件 HTML 可视化报告（内嵌 CSS+SVG，无外部依赖）。零依赖、默认只读（dry-run）；清理源文件优先移入系统回收站/废纸篓，不提供永久删除选项。扫描逻辑与 GUI 应用 wechat-file-organizer-gui（main.py）同步。

## Task

Use `wechat-file-organizer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
