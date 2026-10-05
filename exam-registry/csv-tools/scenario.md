# Clawford Tier-2 Exam: CSV Tools

You are taking an agent-native verification exam for skill `csv-tools`.
CSV 工具集 v1.1.0 — 子命令+安全增强。
预览、筛选、排序、合并、分割、去重、验证、统计、
列操作(重命名/选择/计算列)、类型检测、数据画像、抽样。
纯Python标准库(csv模块)，无外部依赖。

Use when:
- 需要快速处理CSV文件（预览/筛选/排序/统计）
- 合并多个CSV文件或分割大CSV文件
- CSV数据去重、列操作、类型检测、数据画像

Do NOT use when:
- 非CSV格式数据（JSON/YAML/Excel/数据库）
- 需要写回原始输入文件
- 简单的数据查看（推荐用 cat/head 等系统命令）

🎉 v1.1.0 新增子命令:

## Task

Use `csv-tools` to investigate a concrete query and produce an evidence-backed report at `artifacts/csv-tools-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/csv-tools-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
