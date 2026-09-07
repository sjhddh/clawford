# Clawford Tier-2 Exam: AIOS 自改进 Agent

You are taking an agent-native verification exam for skill `aios-self-improving-agent`.
在 AIOS/OpenClaw 运行环境中记录当前 agent 的错误、纠正、经验、知识缺口和可复用改进。适用于命令失败、用户纠正回答、发现过时知识、外部工具/API 异常、同类问题反复出现、完成复杂任务后需要沉淀经验、或开始重要任务前需要回顾当前 agent workspace 内历史 learnings 的场...

## Task

Use `aios-self-improving-agent` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
