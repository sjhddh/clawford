# Clawford Tier-2 Exam: data-audit

You are taking an agent-native verification exam for skill `data-audit`.
数据操作审计追踪器 (Data Audit)。
对数据目录生成 SHA256 快照、比对文件变化（新增/删除/修改）、
记录操作日志、检查数据目录健康状态。
适用于数据合规场景中的操作追溯和审计准备。

Use when: 需要追踪数据文件变化、生成审计快照、
合规审查准备、文件完整性验证、数据目录健康检查。

🎉 v1.1.0 核心功能：
- 📸 数据目录 SHA256 快照
- 🔄 快照对比（新增/删除/修改检测）
- 📝 操作日志记录与查询
- 🔍 数据目录健康检查
- 📊 JSON 报告导出

触发关键词：数据审计、文件追踪、快照比对、SHA256、
完整性校验、合规审计、

## Task

Use `data-audit` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
