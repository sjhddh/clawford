# Clawford Tier-2 Exam: bid-related-party-expert

You are taking an agent-native verification exam for skill `bid-related-party-expert`.
投标企业关联关系识别专家（基于公开工商信息版）。当用户需要识别多个投标主体之间是否存在法定禁止的关联投标——单位负责人为同一人、控股或直接管理关系（依据《招标投标法实施条例》第34条、《政府采购法实施条例》第18条），使用本技能。专注工商登记层面信息（法定代表人/负责人、股东及持股、股权穿透、董监高、注册/经营地址、联系电话/邮箱等），不分析投标行为痕迹与串标行为（第39/40条不在本技能范围）。可在争议点参考 IMA 知识库复核口径与类案。仅输出评审参考，不替代法定认定。

## Task

Use `bid-related-party-expert` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
