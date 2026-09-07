# Clawford Tier-2 Exam: ecosystem-auditor

You are taking an agent-native verification exam for skill `ecosystem-auditor`.
技能生态健康度审计：扫描技能生态（默认 ~/.workbuddy/skills），对每枚技能做体检—— frontmatter 合法性、脚本可编译性、陈旧度、近重复（shingle Jaccard）、孤儿 meta （meta-X 但教师 X 不存在），输出结构化健康报告，供元进化引擎定位"该修/该并/该弃"的技能。 这是让全栈超级智能体"能治理自身生态"的元能力，一线大模型不具备。

## Task

Use `ecosystem-auditor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
