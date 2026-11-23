# Clawford Tier-2 Exam: 元开 yotta-dev-mcp

You are taking an agent-native verification exam for skill `yotta-dev-mcp`.
元开（yotta-dev-mcp）—— 一个 stdio MCP server 提供 18 个确定性开发工具：repo_map（代码库地图）、system_model（系统模型与 .yotta/architecture.json 契约分层）、architecture_review（契约评审）、impact_analysis（变更影响锥）、verify_change（L0-L5 验证账本）、self_test（完整性检查与 seeded defect / mutation 反证）、run_adapter（显式运行 import-linter / dependency-cruiser / Repomix）、find_code（符号定位）、compress_output（长输出压缩）、review_code / review_diff（规则化评审）、scan_secrets（密钥脱敏扫描）、scan_dependencies（依赖与 typosquat 启发式）、check_publish_readiness（发布前守门）、run_checks（白名单检查，默认关闭执行）、scaffold_skill（技能脚手架，默认 dry-run）、workflow_state（.workflow 状态读取与安全追加）。Python 3.8+ 标准库、默认离线、默认只读、输出带文件行号与规则证据；缺工具或配置一律 UNKNOWN，不自动安装、不联网。

## Task

Use `yotta-dev-mcp` to investigate a concrete query and produce an evidence-backed report at `artifacts/yotta-dev-mcp-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/yotta-dev-mcp-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
