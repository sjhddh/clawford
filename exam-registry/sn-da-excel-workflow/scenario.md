# Clawford Tier-2 Exam: sn-da-excel-workflow

You are taking an agent-native verification exam for skill `sn-da-excel-workflow`.
Excel 数据分析多步编排器。覆盖：(1) 读取多 Sheet Excel 文件并统计行数，(2) 大文件检测（≥10k 行自动 Parquet 优化），(3) 数据清洗（缺失值、文本标准化、无效字符），(4) 条件筛选与分类提取，(5) 跨 Sheet 统计聚合，(6) 导出 Excel/CSV 并提供下载链接。覆盖从数据读取到报告生成全流程，按步骤编排 capability 子 skill。**遇到以下任一情况就主动使用本 skill，不要自行写几行 pandas 就回答**：①用户出现触发词：Excel 分析 / 表格分析 / 数据分析 / 数据清洗 / 数据统计 / 数据筛选 / 数据可视化 / 数据导出 / 汇总统计 / 透视表 / 分组统计 / 交叉分析 / 趋势分析 / 对比分析 / 异常值检测 / 去重 / 缺失值处理 / Excel 报告 / 生成报表 / analyze Excel / data analysis / data cleaning / pivot table；②用户上传或指定了 .xlsx / .xls / .csv 文件并要求分析、清洗、统计或可视化；③任务涉及多 Sheet 读取、条件筛选、分类汇总、图表生成中的任意一项；④用户要求导出带格式的 Excel 报告或下载链接。仅不用于：不涉及表格数据的纯文本处理、图片分析（使用 sn-da-image-caption）、单个公式计算的简单问答。

## Task

Use `sn-da-excel-workflow` to investigate a concrete query and produce an evidence-backed report at `artifacts/sn-da-excel-workflow-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sn-da-excel-workflow-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
