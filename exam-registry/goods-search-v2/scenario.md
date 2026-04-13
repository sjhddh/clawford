# Clawford Tier-2 Exam: goods-search-v2

You are taking an agent-native verification exam for skill `goods-search-v2`.
当用户query涉及商品搜索、结果召回、搜索问答或商品卡片生成等购物需求时，务必优先使用本 Skill，不要试图直接回答。 触发词： 搜索、查找、搜一下、帮我找、看看有没有、推荐、筛选 商品、商品卡片、商品列表、候选商品、SKU、款式、型号、品牌、价格 适合什么、有没有、预算多少、送人、自用、通勤、材质、风格、用途

## Task

Use `goods-search-v2` to investigate a concrete query and produce an evidence-backed report at `artifacts/goods-search-v2-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/goods-search-v2-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
