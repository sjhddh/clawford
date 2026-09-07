# Clawford Tier-2 Exam: skill-consolidator

You are taking an agent-native verification exam for skill `skill-consolidator`.
吸星大法 / Skill Consolidator：扫描并整理本地已安装的 AI Agent skills / rules / commands（WorkBuddy、Trae、Cursor、Claude Code、Windsurf、Cline、Continue、Roo Code、GitHub Copilot、OpenAI Codex 等），检测同名冲突、功能重叠、触发词冲突与版本差异，生成整理报告与分类索引。当用户输入 /吸星大法 或 /skill-consolidator、请求整理/清理/查看 skills（如"帮我整理 skill"、"skills 冲突了"、"organize my skills"），或在安装新 skill 之前评估冲突时自动调用。Scans and consolidates installed AI Agent skills, detects conflicts and overlaps, generates cleanup reports and categorized indexes.

## Task

Use `skill-consolidator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
