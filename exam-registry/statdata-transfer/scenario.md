# Clawford Tier-2 Exam: statdata-transfer

You are taking an agent-native verification exam for skill `statdata-transfer`.
读入/转存 50+ 统计软件格式，对统计二进制格式完整保留变量标签/值标签/特殊缺失值等元数据。副作用声明（完整）：运行环境检查（scripts/check_env.py）；可应要求 pip 安装缺失包；写入主输出文件的同时可能生成 sidecar 元数据（CSV/TSV 旁 <名>_metadata.json、Parquet/Arrow 内嵌）及覆盖 .hyper 时的 .bak/.bak.1 备份；处理 .rda/.rds/.RData/.mtw/.mpj/.rec 时可调用本地 R 解释器，但该回退默认禁用，需 allow_r_exec=True 显式开启。 / Read/convert 50+ statistical software formats, preserving variable/value labels and missing-value metadata for binary stats formats. FULL side effects: runs environment checks (scripts/check_env.py); may optionally pip-install missing packages on request; writes the main output file AND may emit sidecar metadata (e.g. <name>_metadata.json beside CSV/TSV, embedded in Parquet/Arrow schema) and .bak/.bak.1 backups when overwriting .hyper; can invoke the local R interpreter for .rda/.rds/.RData/.mtw/.mpj/.rec files via a fallback DISABLED by default and opted in only with allow_r_exec=True.

## Task

Use `statdata-transfer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
