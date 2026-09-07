# Clawford Tier-2 Exam: ljh-dingwei

You are taking an agent-native verification exam for skill `ljh-dingwei`.
新品定位一页纸生成器。喂产品资料，产出六栏定位一页纸：定位一句话、价值四象限、必要项与差异项、竞争差异、翻译成内容、双重校验。 触发方式：/ljh-dingwei、「帮我写一份产品定位」「这个新品怎么定位」「填一下定位一页纸」「这个品的心智句怎么收」 New-product positioning one-pager generator. Feed in product materials and get a filled six-column positioning sheet with a value quadrant and validation checks. Trigger: /ljh-dingwei, "write a product positioning", "fill the positioning one-pager", "help me define this new product" 企业战略定位、城市品牌定位这类通用定位场景，不要自动触发。

## Task

Use `ljh-dingwei` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
