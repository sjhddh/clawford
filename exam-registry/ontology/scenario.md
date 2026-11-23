# Clawford Tier-2 Exam: 类型化知识图谱引擎

You are taking an agent-native verification exam for skill `ontology`.
类型化知识图谱引擎，将知识表示为可验证的实体-关系图谱。每个实体拥有类型、属性和关系， 所有变更在提交前根据类型约束进行验证。核心能力涵盖类型化实体创建与验证、关系图谱与基数约束、 Schema约束系统、无环验证、追加式变更日志、图谱遍历查询、跨技能契约声明、计划即图谱变换。 支持 Person、Organiza...

## Task

Use `ontology` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
