# Clawford Tier-2 Exam: WenHub

You are taking an agent-native verification exam for skill `wenhub`.
文枢三院制 AI Agent 协作治理体系。提供决策者→管理者→经略院(任务拆解)→工造院(执行)→明鉴院(质检) 的完整协作流程，适用于需要多 Agent 协作治理的场景， 包括任务分配与分级、质量管控与评分、标准化汇报、知识沉淀与复用、安全管控与违规处理等。 配套参考资料（references/ 目录）涵盖三...

## Task

Use `wenhub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
