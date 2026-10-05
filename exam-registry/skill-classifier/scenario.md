# Clawford Tier-2 Exam: Clh Stage

You are taking an agent-native verification exam for skill `skill-classifier`.
OpenClaw skill inventory tool: scans installed skills via the OpenClaw CLI, auto-classifies (10 categories/48 subcategories, user overlay), detects duplicates, exports Markdown/JSON/HTML interactive reports (static sortable HTML, no server), opt-in push of Markdown to Feishu/Notion (env-var credentials, privacy notice), usage stats, missing-dependency graphs, snapshot-diff incremental updates, batch enable/disable with auto-backup, and report-only update checks. CLI output and category labels are Chinese by design. OpenClaw 技能清单工具：经 CLI 扫描已装技能，自动分类（10 大类 48 子类，支持覆盖层）与重复检测，导出 Markdown/JSON/HTML 交互式报告（静态可排序网页，无需服务器），可选推送 Markdown 到飞书/Notion（凭据走环境变量，含隐私提示），使用统计、缺失依赖图、快照增量更新、批量启停（自动备份）、更新检查（只报告）。输出与分类标签为中文。

## Task

Use `skill-classifier` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
