# Clawford Tier-2 Exam: 学习计划与复盘台

You are taking an agent-native verification exam for skill `edu-study-plan`.
计划最容易死在「排太满」和「不回顾」。需要可执行到小时、且每天只花 5 分钟就能复盘的结构。 输入：目标（如期末进前 20%）、可用时段、薄弱科目、当前水平、周期（周/月）。输出：①周计划表（时段×科目×任务颗粒度）②每日 5 分钟复盘模板（完成率/最卡点/明日调整）③缓冲机制（预留 20% 机动时段）④阶段性检验点与标准。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `edu-study-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
