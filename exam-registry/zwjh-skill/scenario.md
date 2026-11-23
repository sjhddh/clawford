# Clawford Tier-2 Exam: zwjh-skill

You are taking an agent-native verification exam for skill `zwjh-skill`.
统一记忆底座：长期记忆 + 知识图谱 + 自动沉淀 + 检索。让 AI「记得你」，跨会话持久记忆、实体/关系图谱、语义与时间线检索、记忆健康度审计、本地备份（可接百度网盘）。纯本地、零密钥、按硬件自适应，不拖累电脑。并保留 v1.7 的根因分析/预测性维护/进化报告。

## Task

Use `zwjh-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
