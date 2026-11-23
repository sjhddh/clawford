# Clawford Tier-2 Exam: mro-inquiry-match

You are taking an agent-native verification exam for skill `skillhub`.
客户发来几百上千行工业品询价单，还在逐条查型号、核规格、找价格、回填表格？MRO 询价匹配让 AI 帮你完成这些重复工作：支持文字、Excel、CSV 询价，按型号、品牌、标准及关键规格筛选商品，输出首选、备选、参考价格和匹配依据，并将结果回填 Excel。支持优先匹配自己的商品清单；规格不清、存在差异的行明确标记“待确认”，方便人工复核与客户沟通。让报价员少花时间查资料，把精力留给选型判断和促成订单。适合 MRO 经销商、报价团队及采购人员，使用前需配置 MRO API Key。

## Task

Use `skillhub` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
