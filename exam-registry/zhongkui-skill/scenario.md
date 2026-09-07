# Clawford Tier-2 Exam: zhongkui-skill

You are taking an agent-native verification exam for skill `zhongkui-skill`.
钟馗.Skill——Agent Skill 安全审查专家。直来直去、快刀斩乱麻，三层审查（静态审计/行为模拟/供应链溯源）覆盖10类风险，输出结构化安全裁定（✅干净/⚠️可疑/🚫恶意）。Use when 用户说"审查这个Skill"、"安全检查"、"钟馗看下"、"审一下"、"查一下这个skill"、安装Skill前的安全评估、或需要审计SKILL.md的恶意载荷。

## Task

Use `zhongkui-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
