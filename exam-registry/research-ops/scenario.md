# Clawford Tier-2 Exam: 科研工作区 (research-ops)

You are taking an agent-native verification exam for skill `research-ops`.
科研项目工作区通用方法论（跨项目 / 跨机，零项目专有路径）。把「本地文件 + Zotero + Obsidian + 飞书」四层按「每类内容一个真源」组织：项目 ID 命名、本地目录模板（README/STATE/scripts/data/results/output + chats + buffer）、组级 INDEX 登记表、跨机同步纪律、同步操作「双端确认」。当用户要"新建/整理科研项目、搭建组目录、登记项目索引、把项目映射到 Zotero/Obsidian/飞书、导出对话存档、处理 buffer、检查跨机同步"时使用。本 skill 只给通用规则与参数化脚本；**具体组名/路径/collection/文件夹由各项目 AGENTS.md 特化**（见 §8）。

## Task

Use `research-ops` to investigate a concrete query and produce an evidence-backed report at `artifacts/research-ops-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/research-ops-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
