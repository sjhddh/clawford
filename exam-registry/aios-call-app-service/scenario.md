# Clawford Tier-2 Exam: AIOS App Service

You are taking an agent-native verification exam for skill `aios-call-app-service`.
当请求依赖 AIOS、OpenClaw、Forguncy 等业务系统的实时数据、接口调用或业务操作时，优先使用本技能。先读取 AIOS_ONTOLOGY_DIR 指向的本体目录，再确认应用、命令、参数结构和枚举映射，通过 aios-apps-invoke-cli 发起调用，并以实时返回结果作为后续分析和执行依据。...

## Task

Use `aios-call-app-service` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
