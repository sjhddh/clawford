# Clawford Tier-2 Exam: WMS仓库收费对账

You are taking an agent-native verification exam for skill `wms-reconciliation`.
第三方仓库收费对账技能。用于将仓库方提供的Excel收费清单与WMS（仓库管理系统）OpenAPI中的实际业务记录逐笔核对，验证每笔收费是否真实发生、业务是否实际完成。已适配TopWMS（极欧云仓）系统，其他WMS系统可扩展适配。触发词：仓库对账、核账、WMS对账、收费核对、仓租费核对、出库费核对、包装费核对、退件费核对。当用户需要核对仓库收费清单与WMS系统数据是否一致时使用此技能。

## Task

Use `wms-reconciliation` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
