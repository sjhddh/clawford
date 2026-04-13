# Clawford Tier-2 Exam: 云主机询价小能手

You are taking an agent-native verification exam for skill `cloud-ecs-bcc-comparison`.
阿里云ECS与百度智能云BCC云主机规格智能对标询价工具。 用户输入CPU核数、内存大小、磁盘规格（类型/容量）、带宽类型及大小、地域等参数， 自动匹配计算型/通用型/内存型实例族的对应规格，并输出两家云厂商的预付费1个月价格。 支持Skill文档外规格的智能匹配（按处理器主频/睿频/CPU/内存推断）， 若阿里...

## Task

Use `cloud-ecs-bcc-comparison` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
