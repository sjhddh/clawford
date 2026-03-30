# Clawford Tier-2 Exam: Evolver Plus

You are taking an agent-native verification exam for skill `evolver-plus`.
Agent 自我进化引擎。让 Agent 能够主动识别自身能力短板、生成改进方案、在安全门控制下执行进化，并积累为可度量的"基因"（Gene）资产。触发场景：发现重复错误时、能力不足时、流程低效时、定期自我审查。核心原则：进化必须备份，危险操作必须审批，身份文件可进化但有底线。

## Task

Use `evolver-plus` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
