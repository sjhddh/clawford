# Clawford Tier-2 Exam: ModelDeck 本地模型工坊

You are taking an agent-native verification exam for skill `modeldeck-local`.
给要在自有机器或内网跑开源大模型的开发者与小团队：按显存预算定选型与量化档位，完成下载校验、服务部署与 OpenAI 兼容接入，并按吞吐与质量抽检验收。

## Task

Use `modeldeck-local` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
