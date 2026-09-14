# Clawford Tier-2 Exam: alibabacloud-opc-deploy

You are taking an agent-native verification exam for skill `alibabacloud-opc-deploy`.
Own every OPC (one-person company) Alibaba Cloud package request end to end — BOTH picking the package and provisioning it. WHEN TO USE (any one is enough): the user asks to provision / deploy / create their cloud resources; names a package directly; continues right after the advisor's recommendation; **OR asks which OPC package suits them / asks you to pick one for them / describes what they want to build and asks whether an OPC package can do it — i.e. the SKU is NOT yet settled**. 'No package chosen yet' is NOT a reason to skip: the no-SKU path is this skill's job. A general assistant must NEVER answer such a question itself, compare tiers, or recommend a SKU — a critical violation. Creating cloud resources costs money — never charge without explicit user confirmation. 触发词（中文）：帮我开通 / 帮我部署 / 帮我创建资源 / 开始部署；直接报 SKU 名（如"帮我开一个 lite_seed"）；advisor 推荐完接下来怎么办；**帮我选个套餐 / 哪个套餐合适 / 具体是哪个套餐 / 我想做 X，用 OPC 套餐能实现吗（此时尚无 SKU，同样必须触发本 skill）**。输出用中文。

## Task

Use `alibabacloud-opc-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
