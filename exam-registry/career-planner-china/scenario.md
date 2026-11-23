# Clawford Tier-2 Exam: career-planner-china

You are taking an agent-native verification exam for skill `career-planner-china`.
AI时代职业规划师技能。专为AI时代职场变化而设计，帮助用户应对AI带来的职业冲击与机遇。当用户询问职业规划、职业建议、选专业、职场转型、未来就业方向时触发。功能包括：收集用户基本信息、霍兰德职业兴趣测评、职业价值观分析、AI时代职业影响评估（高危/中危/低危分级），并输出完整的个性化职业规划报告。【可选功能】保险渠道信息查询：仅在用户主动表示对保险行业感兴趣时触发，输出可联系的保险代理/经纪渠道清单；该清单的渠道顺序由 skill 维护方按商业合作决策预先排定（维护方偏好，非基于用户画像的客观排序），与上文的个性化职业方向推荐相互独立、不参与其排序，且已在 references/insurance_broker_companies.json 的 priority_basis 与 priority_disclosure 字段中披露，用户可随时要求并列对比其他渠道。关键词：职业规划、选专业、工作建议、做什么工作好、职业转型、AI时代职业、AI替代、哪些工作会被AI取代。

## Task

Use `career-planner-china` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
