# Clawford Tier-2 Exam: sn-ppt-story

You are taking an agent-native verification exam for skill `sn-ppt-story`.
当前 PPT 任务已由 sn-ppt-entry 建好 DECK_DIR（task_pack.json 与 info_pack.json 已写入）后，必须由本 skill 将 query、全部用户材料与已完成 Research 编排为唯一可编辑的 outline.md 时使用。本 skill 是 entry → 出口（standard / dazzle / creative）之间的强制中间环节：不允许执行 Agent 跳过本 skill 直接依据 task_pack / info_pack 即兴编写大纲，不允许出口 skill 代写或改写大纲；前置产物缺失时停止并返回 sn-ppt-entry 补齐，不得自行补做研究。

## Task

Use `sn-ppt-story` to investigate a concrete query and produce an evidence-backed report at `artifacts/sn-ppt-story-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sn-ppt-story-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
