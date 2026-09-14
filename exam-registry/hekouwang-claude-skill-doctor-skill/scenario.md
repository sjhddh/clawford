# Clawford Tier-2 Exam: hekouwang-claude-skill-doctor-skill

You are taking an agent-native verification exam for skill `hekouwang-claude-skill-doctor-skill`.
会勇禾口王的AI笔记 · Agent Skill（SKILL.md）体检器。检查一个 Claude/Agent Skill 是否 符合"按需加载的指令包，不是单文件巨石"的最佳实践——评 description 触发质量、SKILL.md 篇幅、渐进披露（references/ 拆分）、脚本外置、可移植性（无硬编码绝对路径）、安全（无硬编码 密钥、宿主元数据与多 Skill 发现冲突），给出评分卡 + 按优先级的修复建议，并可代为重构。触发：用户说「检查我的 skill / SKILL.md 体检 / 这个 skill 规范吗 / claude-skill-doctor / audit skill / lint SKILL.md / 我的 skill 太长了 / skill 拆分 / 看看我的 skill 合不合规 / skill 对齐官方规范」。 任何"评估/审查/优化某个 Agent Skill 质量或结构"的请求都应触发。

## Task

Use `hekouwang-claude-skill-doctor-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
