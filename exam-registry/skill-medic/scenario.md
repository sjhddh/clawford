# Clawford Tier-2 Exam: skill-medic

You are taking an agent-native verification exam for skill `skill-medic`.
检查已安装的全部 AI Skill：列出完整清单、检出内容重复与互相冲突、评估成熟度，并给出保留/合并/整改/移除建议。Use when 需要盘点 Skill 清单、查功能重复或意图抢占、给 Skill 打分定级、判断该留哪个、按范围限定检查或做增量审计。Skip for 创建新 Skill、单个 Skill 的内部质量自检、C 盘清理、代码审查与安全扫描、纯知识问答、具体业务功能实现。

## Task

Use `skill-medic` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
