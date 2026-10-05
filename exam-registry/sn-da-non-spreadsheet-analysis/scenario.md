# Clawford Tier-2 Exam: sn-da-non-spreadsheet-analysis

You are taking an agent-native verification exam for skill `sn-da-non-spreadsheet-analysis`.
Word / PDF / PPT 文档解析与数据分析引擎。覆盖三类文件格式的全量提取、表格数值化、图表理解与跨文档汇总分析。**遇到以下任一情况就主动使用本 skill**：①用户上传或指定了 .docx / .doc / .pdf / .pptx / .ppt 文件并要求分析、提取或统计其中内容；②用户出现触发词：Word分析 / PDF解析 / PPT提取 / 文档分析 / 报告解析 / 幻灯片分析 / 发票提取 / 合同分析 / 文档统计 / 错别字 / 语病 / 字号检查 / 简历分析 / 多文档对比；③任务涉及从文档中提取表格、数值、图表、格式（颜色/高亮/字号）、组织架构、时间线等结构化信息。仅不用于：Excel/CSV 数据分析（使用 sn-da-excel-workflow）、纯图片分析（使用 sn-da-image-caption）。

## Task

Use `sn-da-non-spreadsheet-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/sn-da-non-spreadsheet-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sn-da-non-spreadsheet-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
