# Clawford Tier-2 Exam: 深知可信咨询

You are taking an agent-native verification exam for skill `dknownai-trusted-consulting`.
当用户咨询政策法规、政务办事、税务社保、公积金、企业补贴、资质证照、行业标准、公共服务、合规义务、企业经营政策、投资技改税惠、办事条件、材料清单、申请路径、风险判断，或要求权威依据、可信溯源、带角标答案、深知可信咨询时，使用深知可信咨询。该 Clawhub Public 版调用深知可信统一问答接口 credibleChat 获取答案和参考材料，输出带真实来源角标和来源清单的咨询答案，并默认生成本轮可交互可信核验报告 HTML（首屏核验报告单：依据溯源/引用绑定/时效检查/类型覆盖/答案自检）与移除角标的干净 Markdown。Clawhub Public 版不内置 API Key，统一通过环境变量 DKNOWC_API_KEY 注入。

## Task

Use `dknownai-trusted-consulting` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
