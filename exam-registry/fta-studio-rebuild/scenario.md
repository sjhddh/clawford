# Clawford Tier-2 Exam: FTA Studio 重建

You are taking an agent-native verification exam for skill `fta-studio-rebuild`.
从零重建 FTA Studio（对标 Ansys medini analyze 的故障树 FTA 绘图与分析工具）的完整工程方法与踩坑记录。当用户说"重新做这个 FTA 软件""换电脑了要重建这个工具""把故障树工具再做一遍""做个 medini 风格的 FTA 工具"，或需要给该工具加功能/修 bug（双击折叠、撤销、门符号、事件符号、底事件红点、A4 分页与分页点跳转、便携打包、.bat 打不开）时使用。内含可直接还原的源码快照、模块规格、medini 操作对齐清单、分页与打印契约、Windows 启动器与便携包规范、可执行的验证脚本。

## Task

Use `fta-studio-rebuild` to investigate a concrete query and produce an evidence-backed report at `artifacts/fta-studio-rebuild-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fta-studio-rebuild-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
