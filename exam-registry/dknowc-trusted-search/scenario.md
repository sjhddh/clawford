# Clawford Tier-2 Exam: 深知可信搜索（法律、政策、标准）

You are taking an agent-native verification exam for skill `dknowc-trusted-search`.
当用户需要可信搜索、权威材料检索、政策法规/标准依据查找、可点击溯源、知识专库、政策调研、城市政策对比、企业补贴与税惠材料核验、合规依据核验，或明确要求深度搜索、深度分析、全面查找、多轮核验、完整方案时，使用深知可信搜索（法律、政策、标准）。本 Skill 默认只调用深知可信搜索接口，不使用统一咨询接口；只有用户明确要求深度搜索或在可信搜索完成后确认升级深度核验时，才调用深度搜索接口。最终交付必须包含直接回复答案、与答案一致的可点击溯源 HTML、以及移除来源角标的干净 Markdown。API Key 统一通过环境变量 DKNOWC_API_KEY 注入。

## Task

Use `dknowc-trusted-search` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
