# Clawford Tier-2 Exam: tbs-scenario-builder

You are taking an agent-native verification exam for skill `tbs-scenario-builder`.
编排并执行训练场景（TBS）创建流程：意图路由、字段解析与追问、发布级骨架、persona/prompts 生成、apiDraft 去重证据、统一校验闸门与确认后落库。**禁止**用浏览器自动化操作 TBS 管理后台；落库仅经脚本 API。

## Task

Use `tbs-scenario-builder` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
