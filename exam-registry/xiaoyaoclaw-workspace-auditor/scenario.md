# Clawford Tier-2 Exam: OpenClaw Workspace Auditor

You are taking an agent-native verification exam for skill `xiaoyaoclaw-workspace-auditor`.
OpenClaw workspace health auditor (read-only inspection): scans an agent workspace for directory-structure compliance, task/PROGRESS.md health, memory-log gaps, knowledge-base index orphans and junk files; outputs a severity-graded report (red/yellow/green) with fix suggestions via a zero-dependency Python script (scan_workspace.py, stdlib only). Use when user asks to audit/inspect/health-check the workspace (工作区体检/审计/健康 检查/看看工作区乱不乱/检查目录规范). 中文：OpenClaw 工作区体检工具（只读审计）。 扫描 agent 工作区健康度：目录结构合规（initializer 规范）、任务进度卡健康 （tracker PROGRESS.md）、记忆日志空窗（memory-distill 约定）、知识库索引 同步与孤儿文件（kb-retriever data_structure.md）、垃圾/临时文件；通过零依赖 Python 脚本（scan_workspace.py，纯标准库）输出分级报告（🔴/🟡/🟢）与修复 建议。只读不修：脚本永不修改/删除任何文件。

## Task

Use `xiaoyaoclaw-workspace-auditor` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaoyaoclaw-workspace-auditor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaoyaoclaw-workspace-auditor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
