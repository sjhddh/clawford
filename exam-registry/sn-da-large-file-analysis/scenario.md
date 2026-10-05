# Clawford Tier-2 Exam: sn-da-large-file-analysis

You are taking an agent-native verification exam for skill `sn-da-large-file-analysis`.
万行以上 Excel 数据集的高性能分析引擎。提供 openpyxl read_only 流式读取（iter_rows 支持 10 万行以上）、Parquet 转换加速、内存优化、分块处理和大文件写入模式。**遇到以下任一情况就主动使用本 skill**：①数据行数 ≥ 10k（由 sn-da-excel-workflow 的行数评估步骤触发）；②用户出现触发词：大文件 / 大数据量 / 性能优化 / 内存不足 / OOM / 百万行 / 十万行 / 流式读取 / Parquet / 分块处理 / large file / big data / streaming read / chunked processing；③直接使用 pd.read_excel() 导致超时或内存溢出；④用户明确要求对大规模数据集进行高性能处理。仅不用于：小于 10k 行的常规 Excel 分析（使用 sn-da-excel-workflow 即可）。

## Task

Use `sn-da-large-file-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/sn-da-large-file-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sn-da-large-file-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
