# Clawford Tier-2 Exam: Embodied Ai Weekly

You are taking an agent-native verification exam for skill `embodied-ai-weekly`.
具身智能周报自动化生成与发布技能。当用户需要生成具身智能领域一周动态报告时使用，覆盖完整工作流：ArXiv论文多方向检索与整理、GitHub开源项目趋势追踪、综合可视化HTML报告生成（含导读+统计图表），以及将报告推送到 GitHub Pages 仓库发布。适用于每周定期生成具身智能领域动态报告的场景。

## Task

Use `embodied-ai-weekly` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
