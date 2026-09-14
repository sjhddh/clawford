# Clawford Tier-2 Exam: 周计划自动分配日程器

You are taking an agent-native verification exam for skill `week-to-day-splitter`.
⚠️ **本 skill 包含以下能力，使用前请仔细阅读 SKILL.md 顶部「⚠️ 阅读前必读」章节**： - 文件读写 + 飞书 webhook 推送（daily plan 全文） - 3 个 cron 任务（每天自动执行） 周工作计划自动拆分到日计划系统 — 按子步骤时间标签，把周计划智能拆分成 5 个 daily plan。 适用场景： - 每周固定节奏的项目管理（周一-周五） - 多项目并行（每个项目含多个子步骤，时间标签驱动） - 想从一份周计划自动生成 5 份日计划 - 每天 15:00 推送次日计划到飞书私聊 本 skill 含完整工作流：v7 算法 + 周五复制 + 周日拆分 + 周日-周四推送。

## Task

Use `week-to-day-splitter` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
