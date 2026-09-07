# Clawford Tier-2 Exam: ljh-duiqi

You are taking an agent-native verification exam for skill `ljh-duiqi`.
品·人群·内容对齐表生成器。喂产品资料，产出五块对齐表，核心是把产品语言翻译成消费者人话和画面的四列表。 触发方式：/ljh-duiqi、「帮我做一张品人群内容对齐表」「这个新品的卖点怎么翻译成人话」「帮编导团队对齐一下这个品」 Product-audience-content alignment table generator. Feed in product info, output a five-block alignment table with a selling-point translation table at its core. Trigger: /ljh-duiqi, "help me build a product-audience-content alignment table", "translate this product's selling points into consumer language" 团队排班表、项目进度对齐表等非内容电商语境，不要自动触发。

## Task

Use `ljh-duiqi` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
